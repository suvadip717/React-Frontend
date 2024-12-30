import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { IoMdSearch, IoMdAddCircle } from "react-icons/io";
import { db } from "../src/config/firebaseConfig.js";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import ContactCard from "./components/ContactCard.js";
import AddAndUpdateContent from "./components/AddAndUpdateContent";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer } from "react-toastify";
import contactImg from "../src/assets/contact.png";

interface Contact {
  id: string;
  name: string;
  email: string;
  // [key: string]: any;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists as Contact[]);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact: DocumentData) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );
      setContacts(filteredContacts as Contact[]);
      return filteredContacts;
    });
  };

  return (
    <div className="bg-zinc-900 h-screen p-4">
      <div className="max-w-[380px] mx-auto p-2">
        <Navbar />
        <div className="flex relative items-center gap-2 my-2">
          <IoMdSearch className="text-white absolute text-3xl m-2 cursor-pointer" />
          <input
            type="text"
            className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-10"
            onChange={filterContacts}
          />
          <IoMdAddCircle
            className="text-white text-5xl cursor-pointer"
            onClick={onOpen}
          />
        </div>
        <div className="flex flex-col gap-3">
          {contacts.length != 0 ? (
            contacts.map((contact) => (
              <ContactCard contact={contact} key={contact.id} />
            ))
          ) : (
            <div className="mx-auto flex gap-3 items-center h-[30vh] justify-center">
              <img src={contactImg} alt="contact-image" />
              <p className="text-white text-2xl">No Contacts Found</p>
            </div>
          )}
        </div>
        <AddAndUpdateContent
          onClose={onClose}
          isOpen={isOpen}
          contact={contacts}
          isUpdate={false}
        />
        <ToastContainer position="bottom-left" />
      </div>
    </div>
  );
}

export default App;
