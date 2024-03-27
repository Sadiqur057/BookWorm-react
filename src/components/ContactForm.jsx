import ContactImg from "../../public/contact.png";
const ContactForm = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-7 md:px-12 lg:px-16 xl:px-32 bg-base-200 font-work">
      <div className="col-span-3">
        <h2 className="text-4xl font-bold leading-tight lg:text-5xl mb-6 text-center md:text-left">
          Lets talk!
        </h2>
        <img src={ContactImg} alt="" className="h-fit w-[250px] mx-auto md:mx-0" />
      </div>
      <form noValidate="" className="space-y-6 col-span-4">
        <div>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-xl"
          />
        </div>
        <div>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded-xl"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded-xl outline-none   resize-none"
            placeholder="Message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
