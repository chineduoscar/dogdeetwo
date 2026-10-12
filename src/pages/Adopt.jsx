import { useState, useEffect } from "react";
import axios from "axios";

const Adopt = () => {
  const [dogs, setDogs] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dog: "",
    message: "",
  });

  useEffect(() => {
    const fectchDog = async () => {
      const response = await axios.get(
        "https://raw.githubusercontent.com/chineduoscar/dog-api-data/refs/heads/main/dogs.json",
      );

      setDogs(response.data);
    };

    fectchDog();
  }, []);

  const handleSubmit = (e) => {
    const response = axios.post(
      "https://raw.githubusercontent.com/chineduoscar/dog-api-data/refs/heads/main/dogs.json",
      formData,
    );

    console.log(response.data);
    e.preventDefault();

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center flex-col max-w-2xl mx-auto gap-4"
      >
        <h1 className="font-bold text-center text-3xl my-2">Adopt Dogs</h1>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name" className="font-semibold">
            Full Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter your name"
            id="name"
            className="py-2 px-1 rounded-md border w-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            id="email"
            className="py-2 px-1 rounded-md border w-full"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="number" className="font-semibold">
            Phone number
          </label>
          <input
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="tel"
            placeholder="0802 298 2231"
            id="number"
            className="py-2 px-1 rounded-md border w-full"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="dog" className="font-semibold">
            Which Dog
          </label>
          <select
            onChange={handleChange}
            name="dog"
            value={formData.dog}
            className="py-2 px-1 rounded-md border w-full"
          >
            <div>
              <option value="" disabled>
                Select dog
              </option>
              {dogs &&
                dogs.map((dog) => (
                  <div key={dog.id}>
                    <option>{dog.name}</option>
                  </div>
                ))}
            </div>
          </select>
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="message" className="font-semibold">
            Message
          </label>
          <textarea
            value={formData.message}
            onChange={handleChange}
            name="message"
            id="message"
            placeholder="Tell us a bit about your home..."
            className="py-2 px-1 rounded-md border w-full"
          ></textarea>
        </div>

        <button className="w-full bg-purple-500 p-2 rounded-md cursor-pointer text-white">
          Adopt
        </button>
      </form>
    </section>
  );
};

export default Adopt;
