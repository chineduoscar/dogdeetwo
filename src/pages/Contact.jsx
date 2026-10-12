import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
    console.log(email);
    setName("");
    setEmail("");
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <section className="">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-10 flex flex-col gap-5 bg-white"
      >
        <input
          value={name}
          // onChange={handleNameChange}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="border"
        />
        <input
          // onChange={handleEmailChange}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="border"
        />

        <button className="bg-green-400 py-3 px-4">Contact us</button>
      </form>
    </section>
  );
};

export default Contact;
