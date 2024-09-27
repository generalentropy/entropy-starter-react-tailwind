export const fetchDog = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res.json();
};
