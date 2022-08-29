import { Image } from "@chakra-ui/react";
import { AiOutlinePicLeft, AiFillThunderbolt } from "react-icons/ai";
import { FaShip } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

const icons = {
  ai: <GiBrain />,
  el: <AiFillThunderbolt />,
  mg: <AiOutlinePicLeft />,
  mc: <FaShip />,
};

const HeaderTeam = ({ divisions }) => {
  return (
    <section className="py-10 bg-background flex justify-center">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-4xl  font-bold capitalize font-display md:text-5xl text-white">
          explore our <br /> <p className="text-primary-400">awesome Members</p>
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 rounded-full bg-secondary-500"></span>
          <span className="inline-block w-3 h-1 ml-1 rounded-full bg-secondary-500"></span>
          <span className="inline-block w-1 h-1 ml-1 rounded-full bg-secondary-500"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center gap-10">
          <div className="w-full lg:w-1/2 grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2">
            {divisions
              .filter((item) => item.is_header != false)
              .map((item) => (
                <div key={item.name} className="space-y-3">
                  <span className="inline-block p-3 rounded-xl text-white bg-secondary-500">
                    {icons[item.code]}
                  </span>

                  <h1 className="text-2xl font-semibold  capitalize text-primary-400">
                    {item.name}
                  </h1>

                  <p className=" text-gray-300">{item.description}</p>
                </div>
              ))}
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <Image
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[40rem] xl:h-[34rem] rounded-2xl"
              src="/asset/cta_member.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderTeam;
