const HeaderRobot = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Meet our powerful
            <span className="relative text-yellow-300"> robots</span>
          </h2>
          <p className="mb-6 text-base text-indigo-100 md:text-lg">
            Our latest robot is called Makara Pumpkin. Makara Pumpkin is an ROV
            that consists of 6 thrusters which can give great maneuverability
            and is also equipped with a gripper. It makes Makara Pumpkin able to
            do several tasks and it is autonomous!
          </p>
          <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
            Our latest robot is called Makara Pumpkin. Makara Pumpkin is an ROV
            that consists of 6 thrusters which can give great maneuverability
            and is also equipped with a gripper. It makes Makara Pumpkin able to
            do several tasks and it is autonomous!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderRobot;
