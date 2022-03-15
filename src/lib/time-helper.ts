export const morningNoonOrNight = () => {
  const geoHrStamp = new Date(Date.now()).getHours();
  return 0 <= geoHrStamp && geoHrStamp < 12
    ? "Good Morning"
    : 12 <= geoHrStamp && geoHrStamp < 18
    ? "Good Afternoon"
    : 18 <= geoHrStamp && geoHrStamp <= 23
    ? "Good Evening"
    : "Good Day";
};
