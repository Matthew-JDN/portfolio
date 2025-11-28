const Card = ({ image, desc, onclick }) => {
  return (
    <div
      className="h-[220px] w-[235px] bg-white rounded-lg mt-4
     flex flex-col justify-center items-center border border-red-300 space-y-6 shadow-md cursor-pointer
     transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:border-2"
      onClick={onclick}
    >
      <img src={image} alt="sdologo" className="object-cover h-30 w-30" />
      <h1 className="text-center">{desc}</h1>
    </div>
  );
};

export default Card;
