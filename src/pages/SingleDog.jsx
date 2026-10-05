import dog from "../assets/heroImage.jpg";
import { useParams } from "react-router-dom";

const SingleDog = () => {
  const params = useParams();

  console.log(params);
  return (
    <section className="py-5 px-4">
      <div className="max-w-300 mx-auto">
        <div className="flex md:flex-row flex-col items-center justify-between gap-5">
          <div className="flex-1">
            <img src={dog} alt="" className="w-full h-150 rounded-md" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">John</h1>
            <p>Rotwhiler - 2 yrs - male</p>
            <div className="flex gap-4 items-center my-2">
              <p className="rounded-full py-1 px-2 border border-gray-700">
                Rotwhiler
              </p>
              <p className="rounded-full py-1 px-2 border border-gray-700">
                2 yrs
              </p>
              <p className="rounded-full py-1 px-2 border border-gray-700">
                male
              </p>
            </div>
            <p>
              This is a very nice dog Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Earum, quis.
            </p>

            <button className="text-white bg-purple-500 rounded-md w-full py-3 px-4 mt-3">
              Adopt John
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
