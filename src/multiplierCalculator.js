export const getMultiplier = (
  carFrigoAdrNormalType,
  carType,
  carTransportationType
) => {
  console.log(carFrigoAdrNormalType);
  console.log(carType);
  console.log(carTransportationType);
  if (carFrigoAdrNormalType === "frigo") {
    if (carType === "camion") {
      if (carTransportationType === "complet") {
        return 1.3;
      } else if (carTransportationType === "grupaj") {
        return 1.5;
      }
    } else if (carType === "sprinter") {
      if (carTransportationType === "complet") {
        return 1.5;
      } else if (carTransportationType === "grupaj") {
        return 2;
      }
    }
  } else if (carFrigoAdrNormalType === "adr") {
    if (carType === "camion") {
      if (carTransportationType === "complet") {
        return 1.15;
      } else if (carTransportationType === "grupaj") {
        return 1.4;
      }
    } else if (carType === "sprinter") {
      if (carTransportationType === "complet") {
        return 1.3;
      } else if (carTransportationType === "grupaj") {
        return 1.7;
      }
    }
  }
  return 1;
};
