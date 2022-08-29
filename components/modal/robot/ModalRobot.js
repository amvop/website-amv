import {
  Modal,
  ModalOverlay,
  Button,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Badge,
  Image,
} from "@chakra-ui/react";
import YoutubeVideo from "@components/youtube-video/YoutubeVideo";
import { mockData } from "./ModalRobot.mock";

const ModalRobot = ({ isOpen, onOpen, onClose, data }) => {
  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        size={"2xl"}
        isCentered
        scrollBehavior={"inside"}
      >
        <ModalOverlay zIndex={100} />
        <ModalContent>
          <ModalHeader>{data.sub_title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col items-center justify-center px-10 w-full">
              <div className="w-full mx-auto mb-5 text-left">
                <h1
                  className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
                  itemProp="headline"
                  title={data.name}
                >
                  {data.name}
                </h1>
                <div className="flex mb-1 gap-1">
                  {data.tags.map((item) => (
                    <Badge p={1} key={item}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mb-5 items-center justify-center">
                {data.source_type == "video" && (
                  <YoutubeVideo
                    videoId={data.source}
                    width="400"
                    height="240"
                  />
                )}
                {data.source_type == "image" && (
                  <Image
                    width="400"
                    height="240"
                    alt={data.name}
                    src={data.source}
                  />
                )}
              </div>
              <article>
                <div>
                  <div className="w-full mx-auto prose text-justify ">
                    {data.description.split("\\n").map((item, i) => (
                      <p className="m-2" key={i}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRobot;
