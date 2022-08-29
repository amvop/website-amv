import Link from "next/link";
import { Image, Link as ChakraLink } from "@chakra-ui/react";
import { socials, links } from "./Footer.mock";

const Footer = ({ dataSocial = socials, dataLink = links }) => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-300">
          <Image
            src="./asset/logo_amv.png"
            className="w-20 scale-150 mb-5"
            alt="logo amv"
          />
        </div>

        <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400">
          <b>We Build. We Design. We Develop.</b>
          <br /> Autonomous Marine Vehicle for Indonesia.
        </p>

        <nav className="mt-12" aria-labelledby="footer-navigation">
          <h2 className="sr-only" id="footer-navigation">
            Footer navigation
          </h2>

          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            {dataLink.map((item) => (
              <li key={item.text}>
                <Link href={item.link}>
                  <p className="cursor-pointer text-white transition hover:text-white/75">
                    {item.text}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex justify-center gap-6 mt-12 md:gap-8">
          {dataSocial.map((item) => (
            <li key={item.link}>
              <ChakraLink
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="cursor-pointer text-white transition hover:text-white/75">
                  <span className="sr-only">Facebook</span>
                  <div className="child:w-6 child:h-6 child-hover:scale-110 transition-all child:duration-100">
                    {item.icon}
                  </div>
                </div>
              </ChakraLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
