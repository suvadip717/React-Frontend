import ContactBody from "./ContactBody";
import ContactHeader from "./ContactHeader";

const ContactPage = () => {
  return (
    <div className="p-16 px-48 uppercase items-center justify-center">
      <ContactHeader />
      <ContactBody />
    </div>
  );
};

export default ContactPage;
