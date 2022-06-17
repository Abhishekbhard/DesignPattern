import { useEffect, useState } from "react";

export default function useDogImages() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => setDogs(message));
  }, []);
  return dogs;
}
