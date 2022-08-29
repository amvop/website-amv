import SectionRobot from "@components/section/robot/SectionRobot";
import Footer from "@components/footer/Footer";
import CTASauvc from "@components/cta/sauvc/CTASauvc";
import StatRobot from "@components/stat/robot/StatRobot";
import { readData } from "@utils/jsonify";

const Robot = ({ robots }) => {
  return (
    <>
      <CTASauvc />
      <StatRobot />
      <SectionRobot robots={robots} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const robotsData = readData("robots.json");

  const robots = Object.entries(robotsData).map(([_, item]) => {
    if (item.tags != "") {
      item.tags = item.tags.split(",");
    } else {
      item.tags = [];
    }

    item.tags.push(item.year);
    item.tags.push(item.type);
    return item;
  });

  return {
    props: {
      robots: robots,
    },
  };
}

export default Robot;
