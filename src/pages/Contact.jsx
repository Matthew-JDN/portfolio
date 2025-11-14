import Footer from "../Components/Footer.jsx";
import ContactCard from "../Components/ContactCard.jsx";
import Nav from "../Components/Nav";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-100">
      <Nav />
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl text-red-800 font-bold">Contact</h1>
          <p className="text-lg text-gray-500">
            Get in touch with me, I'd love to hear from you!
          </p>

          <div className="mt-4 flex flex-col justify-center bg-white shadow-xl py-6 px-8 rounded-lg">
            <h1 className="text-xl text-red-800 font-bold mb-4">
              Contact Information
            </h1>
            <div className="flex flex-col space-y-6">
              <ContactCard title="Email" desc="leiprtla@gmail.com" icon="📧" />
              <ContactCard title="Phone" desc="+63 969 060 3058" icon="📱" />
              <ContactCard
                title="Location"
                desc="Baliwag City, Bulacan"
                icon="📍"
              />
              <ContactCard
                title="Availability"
                desc="Monday - Friday 9:00 AM - 5:00 PM (PHT)"
                icon="⌚"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
