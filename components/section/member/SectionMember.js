import { Badge } from "@chakra-ui/react";
import CardMember from "@components/card/member/CardMember";
import { data } from "autoprefixer";

const SectionMember = ({ division }) => {
  return (
    <section className="py-6 bg-gray-800 text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          <Badge p={2} m={2} fontSize={"sm"} colorScheme={"red"}>
            {division.name}
          </Badge>
        </p>
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          {division.sub_description}
        </h1>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
          {division.members.map((item) => (
            <CardMember key={item.name} member={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionMember;
