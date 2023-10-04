export const getMultiplier = (
  tripType,
  externalTripType,
  carFrigoAdrNormalType,
  carType,
  carTransportationType
) => {
  console.log(carFrigoAdrNormalType);
  console.log(carType);
  console.log(carTransportationType);
  let multipier = 1;

  if (tripType === "extern") {
    if (carType === "sprinter" && carTransportationType === "grupaj") {
      multipier *= 1.2;
    }
    if (
      carType === "camion" &&
      externalTripType === "import" &&
      carTransportationType === "grupaj"
    ) {
      multipier *= 1.3;
    }
  }

  if (carFrigoAdrNormalType === "frigo") {
    if (carType === "camion") {
      if (carTransportationType === "complet") {
        multipier *= 1.3;
      } else if (carTransportationType === "grupaj") {
        multipier *= 1.5;
      }
    } else if (carType === "sprinter") {
      if (carTransportationType === "complet") {
        multipier *= 1.5;
      } else if (carTransportationType === "grupaj") {
        multipier *= 2;
      }
    }
  } else if (carFrigoAdrNormalType === "adr") {
    if (carType === "camion") {
      if (carTransportationType === "complet") {
        multipier *= 1.15;
      } else if (carTransportationType === "grupaj") {
        multipier *= 1.4;
      }
    } else if (carType === "sprinter") {
      if (carTransportationType === "complet") {
        multipier *= 1.3;
      } else if (carTransportationType === "grupaj") {
        multipier *= 1.7;
      }
    }
  }
  return multipier;
};
