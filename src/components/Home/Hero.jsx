import heroImg from "../../assets/heroImage.jpg";

const Hero = () => {
  return (
    <section className="bg-white p-4">
      <section className="mx-auto min-h-[90vh] max-w-300 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-start gap-6 flex-2">
          <h1 className="font-bold text-3xl md:text-6xl max-w-2xl">
            Every Dog Deserves a Loving Home.
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Browse adorable dogs waiting for a family. Give them the love, care,
            and forever home they deserve.
          </p>
          <div className="flex gap-5 items-center">
            <button className="bg-purple-500 rounded-lg py-2 px-4 cursor-pointer text-white">
              Meet the dogs
            </button>
            <button className="border border-gray-800 rounded-lg py-2 px-4 cursor-pointer text-black">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={heroImg}
            alt="heroImg"
            className="rounded-lg hover:scale-105 transition duration-75"
          />
        </div>
      </section>
    </section>
  );
};

export default Hero;
