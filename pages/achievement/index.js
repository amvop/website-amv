import CTAYoutube from "@components/cta/youtube/CTAYoutube";
import Footer from "@components/footer/Footer";
import StatAchievement from "@components/stat/achievement/StatAchievement";
import Timeline from "@components/timeline/Timeline";

const AchievementPage = ({ achievements }) => {
  return (
    <>
      <CTAYoutube />
      <StatAchievement />
      <Timeline achievements={achievements} />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const achievementsData = JSON.parse(
    fs.readFileSync(
      path.join(
        path.resolve(process.cwd(), "public/data"),
        "achievements.json"
      ),
      "utf8"
    )
  );
  const achievements = Object.entries(achievementsData).map(
    ([_, item]) => item
  );

  return {
    props: {
      achievements: achievements,
    },
  };
}

export default AchievementPage;
