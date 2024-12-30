import { CgProfile } from "react-icons/cg";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import useDisclouse from "../hooks/useDisclouse";
import AddAndUpdateContent from "./AddAndUpdateContent";
import { toast } from "react-toastify";

interface Contact {
  id: string;
  name: string;
  email: string;
}

interface ContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const { isOpen, onClose, onOpen } = useDisclouse();

  const deleteContact = async (id: string) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.error("Contact deleted");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-yeallow flex rounded-lg items-center p-3 justify-between mt-2">
        <div className="flex gap-3 items-center">
          <CgProfile className="text-4xl text-orange" />
          <div>
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <RiEditCircleLine
            className="text-3xl cursor-pointer"
            onClick={onOpen}
          />
          <MdDelete
            className="text-3xl text-blue-800 cursor-pointer"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>
      <AddAndUpdateContent
        contact={contact}
        isOpen={isOpen}
        onClose={onClose}
        isUpdate
      />
    </>
  );
};

export default ContactCard;
