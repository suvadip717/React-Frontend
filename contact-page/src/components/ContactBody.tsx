import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

const ContactBody = () => {
  return (
    <div className="flex justify-between">
      <div className="py-20 px-8 w-1/2">
        <div className="flex gap-8">
          <button className="flex bg-black items-center text-white text-xl rounded-md gap-2 p-2.5 w-1/2 justify-center">
            <MdMessage color="white" size={24} />
            <p className="uppercase">Via Support Chat</p>
          </button>

          <button className="flex bg-black items-center text-white text-xl rounded-md gap-2 p-2.5 w-1/2 justify-center">
            <IoIosCall color="white" size={24} />
            <p className="uppercase">Via Call</p>
          </button>
        </div>

        <button className="rounded-md w-full border-black border-2 mt-6 flex justify-center p-2.5 text-xl gap-2 items-center">
          <MdMessage size={24} />
          <p className="uppercase">Via Email Form</p>
        </button>

        <div className="p-6">
          <form className="mx-auto">
            <div className="mb-8 relative">
              <label
                htmlFor="username-success"
                className="absolute -top-2 left-4 bg-white px-1 text-sm font-medium text-black z-10"
              >
                Name
              </label>
              <input
                type="text"
                id="username-success"
                className="block p-2.5 w-full text-sm border-2 border-gray-900 rounded-sm h-14"
                // placeholder="Bonnie Green"
              />
            </div>

            <div className="relative mb-8 ">
              <label
                htmlFor="email"
                className="absolute -top-2 left-4 bg-white px-1 text-sm font-medium text-black z-10"
              >
                E-Mail
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email-address-icon"
                  className="block p-2.5 w-full text-sm border-2 border-gray-900 rounded-sm h-14"
                  //   placeholder="name@flowbite.com"
                />
              </div>
            </div>
            <div className="mb-8 relative">
              <label
                htmlFor="message"
                className="absolute -top-2 left-4 bg-white px-1 text-sm font-medium text-black z-10"
              >
                Text
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm border-2 border-gray-900 h-28 rounded-sm"
                // placeholder="Leave a comment..."
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black text-white text-xl rounded-md gap-2 p-2.5 w-1/2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="Service 24_7-pana 1.svg"
          alt="contact-image"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ContactBody;
