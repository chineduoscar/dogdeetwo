const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-100 py-5 px-4">
      <p className="text-gray-800 text-center">
        © {year} DogDee. All rights reserved. Designed with love for dogs and
        the families who welcome them home.
      </p>
    </div>
  );
};

export default Footer;
