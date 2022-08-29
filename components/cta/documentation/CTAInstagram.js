const CTAInstagram = () => {
  return (
    <section
      className="w-full bg-secondary-500 font-display text-white"
      style={{
        backgroundImage: "url('https://source.unsplash.com/random/640x480')",
        backgroundPosition: "center center",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
          Check our stories and progress on Instagram 📸!
        </h1>
        <button className="px-8 py-3 text-lg font-semibold rounded bg-background text-white">
          See More
        </button>
      </div>
    </section>
  );
};

export default CTAInstagram;
