import { Badge, Image, useDisclosure } from "@chakra-ui/react";
import ModalRobot from "@components/modal/robot/ModalRobot";
import { BiSearchAlt } from "react-icons/bi";

const CardRobot = ({ robot }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="relative block bg-white rounded-lg hover:shadow-sm hover:shadow-primary-400">
        <Image
          loading="eager"
          alt={robot.name}
          className="object-contain w-full h-56 lg:h-72"
          src={robot.images}
        />

        <div className="p-6">
          <div className="flex gap-2">
            {robot.tags.map((item) => (
              <Badge p={1} key={item}>
                {item}
              </Badge>
            ))}
          </div>

          <h5 className="mt-4 text-lg font-bold">{robot.name}</h5>

          <p className="mt-2 block h-10 text-sm font-medium text-gray-600">
            {robot.sub_title}
          </p>

          <button
            name="add"
            type="button"
            onClick={onOpen}
            className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
          >
            <span className="text-sm font-medium mr-1">View Details</span>
            <BiSearchAlt />
          </button>
        </div>
      </div>

      <ModalRobot
        data={robot}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
};

export default CardRobot;
