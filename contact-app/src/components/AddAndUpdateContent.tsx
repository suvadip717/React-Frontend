import { ErrorMessage, Field, Form, Formik } from "formik";
import Model from "./Model";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { toast } from "react-toastify";
import * as Yup from "yup";

interface AddAndUpdateProps {
  isOpen: boolean;
  onClose: () => void;
  isUpdate: boolean;
  contact?: Contact;
}
interface Contact {
  id?: string;
  name: string;
  email: string;
}

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});

const AddAndUpdateContent = ({
  isOpen,
  onClose,
  isUpdate,
  contact,
}: AddAndUpdateProps) => {
  const addContact = async (contact: Contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Succesfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updateContact = async (contact: Contact, id: string) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.warn("Contact Updated Succesfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Model isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate && contact
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            if (isUpdate && contact?.id) {
              updateContact(values, contact.id);
            } else {
              addContact(values);
            }
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border p-2" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="h-10 border p-2" />
              <div className="text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>
            <button
              className="self-end border bg-orange px-3 py-1.5"
              type="submit"
            >
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Model>
    </>
  );
};

export default AddAndUpdateContent;
