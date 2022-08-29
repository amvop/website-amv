import { Image } from "@chakra-ui/react";
import Link from "next/link";

const Sponsor = ({ sponsors }) => {
  return (
    <section className="px-20 py-24 mx-auto bg-background">
      <h1 className="mb-3 text-4xl md:text-5xl font-bold font-display leading-tight text-center text-primary-400">
        Meet Our Previous Partner
      </h1>
      <p className="mb-16 text-md md:text-lg text-center text-white">
        Organizations of all sizes trust Autonomous Marine Vehicle to
        continuously engineered outstanding products
      </p>

      <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-6">
        {sponsors.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center py-5 px-5 bg-slate-200 rounded-lg shadow-md"
          >
            <Image
              src={item.image}
              alt="Sponsor"
              className="block object-contain h-16"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href={"/contact"}>
          <button
            type="button"
            className="px-8 hover:scale-110 transition-all py-3 font-semibold text-lg rounded-full font-body bg-gray-100 text-gray-800"
          >
            Join Us!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Sponsor;
