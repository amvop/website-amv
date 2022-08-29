import TextGradient from "@components/text/gradient/TextGradient";
import YoutubeVideo from "@components/youtube-video/YoutubeVideo";
import { Icon, Flex, useColorModeValue } from "@chakra-ui/react";
const VideoHome = () => {
  return (
    <div className="px-10 text-center py-10 pb-20 pt-40 flex flex-col items-center justify-center bg-background">
      <TextGradient>ONGOING! Makara Pumpkin for SAUVC 2022</TextGradient>
      <div className="my-4 " />
      <Flex
        marginTop={{ base: 0, sm: 10 }}
        justify={"center"}
        align={"center"}
        position={"relative"}
      >
        <Blob
          w={"200%"}
          h={"200%"}
          position={"absolute"}
          top={"-50%"}
          left={"-5%"}
          zIndex={0}
          color={useColorModeValue("secondary.50", "secondary.600")}
        />
        <YoutubeVideo videoId={"U8GOqvt0ufw"} width={"680"} />
      </Flex>
    </div>
  );
};

export const Blob = (props) => {
  return (
    <Icon
      width={{ base: "105%", md: "95%" }}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="#f59e0b"
      />
    </Icon>
  );
};

export default VideoHome;
