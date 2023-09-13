import { intern, extern } from "../assets/transport_data";

export const roundToDecimal = (number, decimalPlaces = 1) => {
  const factor = 10 ** decimalPlaces;
  return Math.round(number * factor) / factor;
};

export const calculateInternalPrice = (
  carType,
  carTransportationType,
  noOfPallets,
  tripDistanceKm,
  internalSprinterGoodsSize,
  noOfFloorSquareMetters
) => {
  let priceRange = [0, 0]; // Default price range

  let pricingObject = intern[carType][carTransportationType];
  if (
    carType === "camion" &&
    carTransportationType === "grupaj" &&
    (noOfPallets > 0 || noOfFloorSquareMetters > 0) &&
    tripDistanceKm > 0
  ) {
    if (noOfFloorSquareMetters > 0 && noOfPallets === 0)
      noOfPallets = squareMettersToPallets(noOfFloorSquareMetters);

    const matchingDistanceKey = findDistanceKey(pricingObject, tripDistanceKm);

    if (matchingDistanceKey) {
      const palletKeys = Object.keys(pricingObject[matchingDistanceKey]);
      const matchingPalletKeyIndex = palletKeys
        .map((el, index) => el.split("paleti")[0].trim())
        .findIndex((key) => {
          const [minPallets, maxPallets] = key.split("-").map(Number);
          return noOfPallets >= minPallets && noOfPallets <= maxPallets;
        });
      const matchingPalletKey = palletKeys[matchingPalletKeyIndex];
      if (matchingPalletKey) {
        priceRange = pricingObject[matchingDistanceKey][matchingPalletKey];
      }
      if (
        matchingPalletKey === "16-33 paleti" &&
        matchingDistanceKey === "500+ km"
      ) {
        console.log(priceRange);
        return (
          roundToDecimal(priceRange[0]) +
          "-" +
          "[" +
          roundToDecimal(priceRange[1][0] * tripDistanceKm) +
          "-" +
          roundToDecimal(priceRange[1][1] * tripDistanceKm) +
          "]"
        );
      }
    }
  } else if (
    carType === "camion" &&
    carTransportationType === "complet" &&
    tripDistanceKm > 0
  ) {
    const matchingDistanceKey = findDistanceKey(pricingObject, tripDistanceKm);
    priceRange = pricingObject[matchingDistanceKey];
    if (matchingDistanceKey === "500+ km") {
      return (
        roundToDecimal(priceRange[0] * tripDistanceKm) +
        "-" +
        roundToDecimal(priceRange[1] * tripDistanceKm)
      );
    }
  } else if (
    carType === "sprinter" &&
    carTransportationType === "complet" &&
    tripDistanceKm > 0
  ) {
    const matchingDistanceKey = findDistanceKey(pricingObject, tripDistanceKm);
    priceRange = pricingObject[matchingDistanceKey];
    if (matchingDistanceKey === "500+ km") {
      return (
        roundToDecimal(priceRange[0] * tripDistanceKm) +
        "-" +
        roundToDecimal(priceRange[1] * tripDistanceKm)
      );
    }
  } else if (
    carType === "sprinter" &&
    carTransportationType === "ltl" &&
    tripDistanceKm > 0 &&
    internalSprinterGoodsSize !== ""
  ) {
    const matchingDistanceKey = findDistanceKey(pricingObject, tripDistanceKm);

    if (matchingDistanceKey) {
      priceRange =
        pricingObject[matchingDistanceKey][internalSprinterGoodsSize];
    }
  }

  return priceRange[0] + "-" + priceRange[1];
};

const findDistanceKey = (pricingObject, tripDistanceKm) => {
  const distanceKeys = Object.keys(pricingObject);
  const matchingDistanceKeyIndex = distanceKeys
    .map((el, index) => el.split("km")[0].trim())
    .findIndex((key) => {
      if (key.includes("+")) {
        const [minKm] = key.split("+").map(Number);
        return tripDistanceKm >= minKm;
      } else {
        const [minKm, maxKm] = key.split("-").map(Number);
        return tripDistanceKm >= minKm && tripDistanceKm <= maxKm;
      }
    });
  const matchingDistanceKey = distanceKeys[matchingDistanceKeyIndex];
  return matchingDistanceKey;
};

const findWeightKey = (pricingObject, tripDistanceKm) => {
  const weightKeys = Object.keys(pricingObject);
  const matchingWeightKeyIndex = weightKeys
    .map((el, index) => el.split("KG")[0].trim())
    .findIndex((key) => {
      if (key.includes("+")) {
        const [minKm] = key.split("+").map(Number);
        return tripDistanceKm >= minKm;
      } else {
        const [minKm, maxKm] = key.split("-").map(Number);
        return tripDistanceKm >= minKm && tripDistanceKm <= maxKm;
      }
    });
  const matchingWeightKey = weightKeys[matchingWeightKeyIndex];
  return matchingWeightKey;
};

const squareMettersToPallets = (noOfFloorSquareMetters) => {
  const factorConversie = 0.4;
  const paleti = noOfFloorSquareMetters / factorConversie;
  return Math.floor(paleti);
};

export const calculateExternalPrice = (
  carType,
  carTransportationType,
  tripDistanceKm,
  externalTripType,
  importingFromCountry,
  exportingToCountry,
  weightOfGoodsKg,
  noOfFloorSquareMetters
) => {
  let priceRange = [0, 0]; // Default price range

  let pricingObject = extern[externalTripType][carType][carTransportationType];
  let outsideCountry =
    exportingToCountry !== "" ? exportingToCountry : importingFromCountry;
  if (
    carType === "camion" &&
    carTransportationType === "complet" &&
    tripDistanceKm > 0
  ) {
    const matchingDistanceKey = findDistanceKey(pricingObject, tripDistanceKm);
    priceRange = pricingObject[outsideCountry];
    return (
      roundToDecimal(priceRange[0] * tripDistanceKm) +
      "-" +
      roundToDecimal(priceRange[1] * tripDistanceKm)
    );
  } else if (
    carType === "camion" &&
    carTransportationType === "grupaj" &&
    noOfFloorSquareMetters > 0
  ) {
    priceRange = pricingObject[outsideCountry];
    return (
      roundToDecimal(priceRange[0] * noOfFloorSquareMetters) +
      "-" +
      roundToDecimal(priceRange[1] * noOfFloorSquareMetters)
    );
  } else if (
    carType === "sprinter" &&
    carTransportationType === "complet" &&
    tripDistanceKm > 0
  ) {
    priceRange = pricingObject[outsideCountry];
    return (
      roundToDecimal(priceRange[0] * tripDistanceKm) +
      "-" +
      roundToDecimal(priceRange[1] * tripDistanceKm)
    );
  } else if (
    carType === "sprinter" &&
    carTransportationType === "grupaj" &&
    weightOfGoodsKg > 0
  ) {
    pricingObject = pricingObject[outsideCountry];
    const weightMatchingKey = findWeightKey(pricingObject, weightOfGoodsKg);
    priceRange = pricingObject[weightMatchingKey];
    return (
      roundToDecimal(priceRange[0] * weightOfGoodsKg) +
      "-" +
      roundToDecimal(priceRange[1] * weightOfGoodsKg)
    );
  }
  return priceRange[0] + "-" + priceRange[1];
};
