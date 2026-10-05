import axios from "axios";
import { useState, useEffect } from "react";

const FeaturedDogs = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/chineduoscar/dog-api-data/refs/heads/main/dogs.json",
      );
      setDogs(response.data);
    };

    fetchDogs();
  }, []);

  console.log(dogs);

  return (
    <section className="py-10 px-4">
      <div className="max-w-300 mx-auto my-4">
        <div className="text-center flex flex-col items-center gap-3">
          <h1 className="font-bold text-4xl">
            Featured <span className="text-purple-500">Dogs</span>
          </h1>
          <p className="text-lg">
            Meet a few of our dogs currently looking for a home.
          </p>
        </div>

        {dogs.length == 0 && <p className="text-center mt-5">loading ...</p>}

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {dogs.slice(0, 6).map((dog) => (
            <div key={dog.id} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={dog.image}
                alt={dog.name}
                className="h-80 w-full hover:scale-105 transition-all duration-75"
              />

              <div className="py-6 px-4 flex flex-col gap-2">
                <h1 className="text-xl font-bold">{dog.name}</h1>
                <p className="text-lg">
                  {dog.breed} - {dog.age}
                </p>
                <button className="text-white bg-purple-500 rounded-md w-full py-3 px-4">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDogs;
