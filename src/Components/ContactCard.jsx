const ContactCard = ({ title, desc, icon }) => {
  return (
    <div
      className="bg-gray-200 flex items-center p-4 rounded-lg w-[500px] 
    transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:bg-gray-300"
    >
      <div className="bg-red-800 rounded-full p-2 text-lg w-[43px] text-center">
        {icon}
      </div>
      <div className="flex flex-col items-start ml-6">
        <h1 className="font-bold">{title}</h1>
        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default ContactCard;
