import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SingleDog = () => {
  const [dogs, setDogs] = useState([]);
  const params = useParams();

  const dogId = params.id;

  useEffect(() => {
    const fectchDog = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/chineduoscar/dog-api-data/refs/heads/main/dogs.json",
      );

      setDogs(response.data);
    };

    fectchDog();
  }, []);

  console.log(dogs);

  const singleDog = dogs.find((dog) => {
    return dog.id === Number(dogId);
  });

  console.log(singleDog);

  if (!singleDog) {
    return <>loading...</>;
  }
  return (
    <section className="py-5 px-4">
      <div className="max-w-300 mx-auto">
        <div className="flex md:flex-row flex-col items-center justify-between gap-5">
          <div className="flex-1">
            <img
              src={singleDog.image}
              alt=""
              className="w-full h-150 rounded-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{singleDog.name}</h1>
            <p>
              {singleDog.breed} - {singleDog.age} - {singleDog.gender}
            </p>
            <div className="flex gap-4 items-center my-2">
              <p className="rounded-full py-1 px-2 border border-gray-700">
                {singleDog.breed}
              </p>
              <p className="rounded-full py-1 px-2 border border-gray-700">
                {singleDog.age}
              </p>
              <p className="rounded-full py-1 px-2 border border-gray-700">
                {singleDog.gender}
              </p>
            </div>
            <p>{singleDog.description}</p>

            <button className="text-white bg-purple-500 rounded-md w-full py-3 px-4 mt-3">
              Adopt {singleDog.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleDog;
// name
// breed - 2yrs male
// breed age gender
// descritpioin

// adopt name
