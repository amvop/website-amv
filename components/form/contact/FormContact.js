const FormContact = () => {
  return (
    <div className="p-8 bg-white rounded-lg text-background shadow-lg lg:p-12 lg:col-span-3">
      <form action="" className="space-y-4">
        <h1 className="text-secondary-500 font-display font-bold text-2xl">
          Send us an email 📬
        </h1>
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-3 text-sm border border-slate-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
 rounded-lg"
            placeholder="Name"
            type="text"
            id="name"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 text-sm border border-slate-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
 rounded-lg"
              placeholder="Email address"
              type="email"
              id="email"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full p-3 text-sm border border-slate-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
 rounded-lg"
              placeholder="Phone Number"
              type="tel"
              id="phone"
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 text-sm border border-slate-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
 rounded-lg"
            placeholder="Message"
            rows="8"
            id="message"
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-secondary-700 rounded-lg sm:w-auto"
          >
            <span className="font-medium"> Send Enquiry </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
