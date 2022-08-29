import Link from "next/link";

const CTAMember = ({ divisions }) => {
  return (
    <section className="p-4 md:p-8 bg-gray-800 text-gray-100">
      <div className="container p-4 mx-auto my-6 space-y-1 text-center">
        <h2 className="pb-3 text-primary-400 text-4xl font-bold font-display md:text-5xl">
          Meet the shipmate
        </h2>
        <p className="font-body text-md md:text-lg">
          Proudly present our shipmates who dedicate themselves to building this
          team goes to victory.
        </p>
      </div>
      <div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
        {divisions
          .filter((item) => item.is_header == true)
          .map((item, i) => (
            <div key={i} className="flex flex-col px-8 py-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">
                {item.name}
              </h2>
              <p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">
                {item.description}
              </p>
              <Link href="/team">
                <p className="inline-flex items-center space-x-2 cursor-pointer hover:text-primary-500 transition-all text-sm text-violet-400">
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CTAMember;
