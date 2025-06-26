import { Image } from "@chakra-ui/react";
import Link from "next/link";

const Sponsor = ({ sponsors_current }) => {
  return (
    <section id="sponsors" className="px-20 py-24 mx-auto bg-background">
      <h1 className="mb-3 text-4xl md:text-5xl font-bold font-display leading-tight text-center text-primary-400">
        Meet Our Sponsors
      </h1>
      <p className="mb-10 text-md md:text-lg text-center text-white">
        Organizations of all sizes trust Autonomous Marine Vehicle to
        continuously engineered outstanding products
      </p>

      <h2 className="mb-5 text-2xl md:text-3xl font-bold font-display leading-tight text-center text-primary-400">
        Current Sponsor
      </h2>

      <div className="flex flex-wrap grid-cols-2 gap-16 mb-24 text-center justify-center items-center lg:grid-cols-6">
        <div className="flex min-w-1/4 items-center justify-center py-8 px-8 bg-white rounded-lg shadow-md">
        <Image 
        src="asset/sponsor/pertamina_1.png"
        alt="Pertamina"
        className="block object-contain md:h-56 h-24"
        width={500}/>
        </div>
        <div className="flex min-w-1/4 items-center justify-center py-8 px-8 bg-white rounded-lg shadow-md">
        <Image 
        src="asset/sponsor/pelindo-nobg.png"
        alt="Pertamina"
        className="block object-contain md:h-56 h-24"
        width={500}/>
        </div>
        <div className="flex min-w-1/4 items-center justify-center py-8 px-8 bg-white rounded-lg shadow-md">
        <Image
        src="asset/sponsor/apave.jpeg"
        alt="Apave"
        className="block object-contain md:h-50 h-24"
        width={500}/>
        </div>
      </div>

      <h2 className="mb-5 text-2xl md:text-3xl font-bold font-display leading-tight text-center text-primary-400">
       Previous Sponsors 
      </h2>

      <div className="flex flex-wrap grid-cols-2 gap-16 mb-16 text-center justify-center items-center lg:grid-cols-6">
        {sponsors_current.filter((item) => item.priority == 1).map((item, i) => (
          <div
            key={i}
            className="flex min-w-1/4 items-center justify-center py-8 px-8 bg-slate-200 rounded-lg shadow-md"
          ><Image
                src={item.image}
                alt={item.name}
                className="block object-contain h-24"/>
            
          </div>
        ))}
      </div>

      <div className="flex flex-wrap grid-cols-2 gap-16 mb-16 text-center justify-center items-center lg:grid-cols-6 ">
        {sponsors_current.filter((item) => item.priority == 2).map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center py-8 px-8 bg-slate-200 rounded-lg shadow-md"
          ><Image
                src={item.image}
                alt={item.name}
                className="block object-contain h-20 scale-100"/>
            
          </div>
        ))}
      </div>

      <div className="flex flex-wrap grid-cols-2 gap-16 mb-16 text-center justify-center items-center lg:grid-cols-6">
        {sponsors_current.filter((item) => item.priority == 3).map((item, i) => (
          <div
            key={i}
            className="flex min-w-1/4 items-center justify-center py-8 px-8 bg-slate-200 rounded-lg shadow-md"
          ><Image
                src={item.image}
                alt={item.name}
                className="block object-contain h-8 w-25 scale-100"/>
            
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
