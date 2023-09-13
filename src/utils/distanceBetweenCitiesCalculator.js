export const getDistanceInKmBetweenCities = (firstCity, secondCity) => {
  return getDistanceBetweenCoordonates(
    getCoordinatesByCityName(firstCity),
    getCoordinatesByCityName(secondCity)
  );
};

export const getCoordinatesByCityName = async (cityName) => {
  const apiKey = "51fdbf0af0b805f6bb13a3b6b1cb0e4f";
  const getCoordinatesUrlFirstCity = `http://api.openweathermap.org/geo/1.0/direct?q={${cityName}}&appid={${apiKey}}`;
  const res = await fetch(getCoordinatesUrlFirstCity);
  const data = await res.json();
  console.log(data);
};
export const getDistanceBetweenCoordonates = (coord1, coord2) => {
  let lat1 = coord1.lat;
  let lon1 = coord1.lon;
  let lat2 = coord2.lat;
  let lon2 = coord2.lon;
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (lat1 * Math.PI) / 180;
  const lon1Rad = (lon1 * Math.PI) / 180;
  const lat2Rad = (lat2 * Math.PI) / 180;
  const lon2Rad = (lon2 * Math.PI) / 180;

  // Calculate the differences between coordinates
  const dLat = lat2Rad - lat1Rad;
  const dLon = lon2Rad - lon1Rad;

  // Calculate the distance using the Haversine formula
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};
