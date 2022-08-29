import { TbShip } from "react-icons/tb";
import { VscTypeHierarchy } from "react-icons/vsc";
import { GiChampions } from "react-icons/gi";

const StatRobot = () => {
  return (
    <section className="p-6  bg-gray-800 text-gray-100">
      <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
            <TbShip className="h-9 w-9 text-gray-800" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">19</p>
            <p className="capitalize">Products</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
            <VscTypeHierarchy className="h-9 w-9 text-gray-800" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">5</p>
            <p className="capitalize">Types</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-9 w-9 text-gray-800"
            >
              <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
              <rect width="32" height="32" x="80" y="264"></rect>
              <rect width="32" height="32" x="240" y="128"></rect>
              <rect width="32" height="32" x="136" y="168"></rect>
              <rect width="32" height="32" x="400" y="264"></rect>
              <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">10+</p>
            <p className="capitalize">Years</p>
          </div>
        </div>
        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
            <GiChampions className="h-9 w-9 text-gray-800" />
          </div>
          <div className="flex flex-col justify-center align-middle">
            <p className="text-3xl font-semibold leading-none">10+</p>
            <p className="capitalize">Competitions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatRobot;
