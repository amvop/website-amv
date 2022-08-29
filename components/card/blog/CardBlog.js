import { Badge, Avatar, Image } from "@chakra-ui/react";

const CardBlog = () => {
  return (
    <>
      <a href="#">
        <Image
          src="https://kutty.netlify.app/brand/og.png"
          className="object-cover w-full h-64 mb-5 bg-center rounded"
          alt="Kutty"
          loading="lazy"
        />
      </a>

      <div className="flex gap-2 mb-3">
        <Badge colorScheme={"purple"}>Tech</Badge>

        <Badge colorScheme={"green"}>New</Badge>
      </div>
      <h2 className="mb-2 text-xl font-bold leading-snug font-display text-primary-400">
        <a href="#" className="text-primary-400 hover:text-purple-700">
          Process Documents Using Artificial Intelligence For RPA Bots
        </a>
      </h2>
      <p className="mb-4 text-sm font-normal text-gray-400 font-body">
        Earlier RPA bots used to have some limitations like it would take
        structured data for processing from excel, database, on these data. But
        with advancements in technology like OCR (Optical Character Recognition)
        and Machine Learning, RPA bots are capable of extracting these data …
      </p>
      <a className="flex items-center text-gray-700" href="#">
        <div className="avatar">
          <Avatar
            src="https://kutty.netlify.app/placeholder.jpg"
            alt="Photo of Praveen Juge"
          />
        </div>
        <div className="ml-2">
          <p className="text-sm font-semibold text-secondary-600">
            Praveen Juge
          </p>
          <p className="text-sm text-gray-500">Jan 12, 2021</p>
        </div>
      </a>
    </>
  );
};

export default CardBlog;
