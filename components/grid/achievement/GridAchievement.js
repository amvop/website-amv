import Link from "next/link";
import ButtonRounded from "@components/button/rounded/ButtonRounded";
import { GrAchievement } from "react-icons/gr";
import { Text } from "@chakra-ui/react";

const GridAchievement = ({ achievements }) => {
  return (
    <section className="achivement-scroll marker:text-wite bg-background">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold font-display md:text-5xl text-primary-400">
            Our Achievements
          </h2>

          <Text
            className="mt-4 font-body text-md md:text-lg text-gray-300"
            noOfLines={3}
          >
            Talent wins games, but teamwork and intelligence win championships.
            We believe, Together Everyone Achieves More. And here is the proof.
          </Text>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.slice(0, 6).map((item, i) => (
            <div
              key={i}
              className="block p-8  border border-gray-800 shadow-xl rounded-xl hover:shadow-primary-500/10 hover:border-primary-500/10 transition-all"
            >
              <svg
                className="fill-primary-400 w-10 h-10 text-primary-500"
                stroke="#fbbf24"
                fill="#fbbf24"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                color="#fbbf24"
              >
                <path
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  d="M10.3248685,14.7630919 C7.82620532,14.038202 6,11.7325889 6,9 L6,1 L18,1 L18,10 M6,3 L1,3 L1,7 C1,9.509 2.791,11 5,11 L6,11 M20.0335555,10.884915 C21.7416567,10.4908882 23,9.10306372 23,7 L23,3 L18,3 M10,19 L5,19 L5,23 L16.5,23 M16.5,10 C12.9101429,10 10,12.9101429 10,16.5 C10,20.0898571 12.9101429,23 16.5,23 C20.0898571,23 23,20.0898571 23,16.5 C23,12.9101429 20.0898571,10 16.5,10 L16.5,10 Z M20,14 L15.5,18.5 L13,16 M10.2056405,15.4240751 C8.89754812,16.0817472 8,17.4360568 8,19"
                ></path>
              </svg>

              <h3 className="mt-4 text-xl font-display font-bold text-white">
                {item.name}
              </h3>

              <Text
                className="mt-1 text-sm font-body text-gray-300"
                noOfLines={4}
              >
                {item.description}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/achievement">
            <button
              type="button"
              className="hover:scale-110 transition-all px-8 py-3 font-semibold text-lg rounded-full font-body bg-gray-100 text-gray-800"
            >
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GridAchievement;
