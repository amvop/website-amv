const CTASubscribe = () => {
  return (
    <div
      className="w-full bg-secondary-500"
      style={{
        backgroundImage:
          "url('https://firebasestorage.googleapis.com/v0/b/amv-web-e92ff.appspot.com/o/others%2Fbackground_cta_member.jpg?alt=media&token=7859aa28-6219-4d62-b67e-67b01eb7990d')",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-4xl antialiased font-bold font-display leading-none text-center text-gray-100">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 font-body text-lg antialiased text-center text-gray-100">
          Find out about events and other news
        </p>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-secondary-400 hover:bg-primary-400 transition-all text-gray-900"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASubscribe;
