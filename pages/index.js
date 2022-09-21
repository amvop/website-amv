import HeaderHome from "@components/header/home/HeaderHome";
import Testimonial from "@components/testimonial/Testimonial";
import PreviewProduct from "@components/preview/product/PreviewProduct";
import VideoHome from "@components/video/home/VideoHome";
import FAQ from "@components/faq/FAQ";
import Footer from "@components/footer/Footer";
import CTAMember from "@components/cta/member/CTAMember";
import CTASubscribe from "@components/cta/subscribe/CTASubscribe";
import GridAchievement from "@components/grid/achievement/GridAchievement";
import Sponsor from "@components/sponsor/Sponsor";
import SponsorCurrent from "@components/sponsor-current/SponsorCurrent";
import CTAInstagram from "@components/cta/documentation/CTAInstagram";
import { readData } from "@utils/jsonify";
import { BiCurrentLocation } from "react-icons/bi";

export default function Home({
  sponsors,
  sponsors_current,
  robots,
  divisions,
  achievements,
  testimonials,
  faqs,
}) {
  return (
    <>
      <HeaderHome />
      <VideoHome />
      {/* <CTAInstagram /> */}
      <GridAchievement achievements={achievements} />
      <CTASubscribe />
      <PreviewProduct robots={robots} />
      <CTAMember divisions={divisions} />
      <Testimonial testimonials={testimonials} />
      <SponsorCurrent sponsors_current={sponsors_current} />
      {/* <Sponsor sponsors={sponsors} /> */}
      <FAQ faqs={faqs} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const sponsorsData = readData("sponsors.json");
  const sponsorsCurrentData = readData("sponsors-current.json");
  const robotsData = readData("robots.json");
  const divisionsData = readData("divisions.json");
  const achievementsData = readData("achievements.json");
  const testimonialsData = readData("testimonials.json");
  const faqsData = readData("faqs.json");

  const sponsors = Object.entries(sponsorsData).map(([_, item]) => item);
  const sponsors_current = Object.entries(sponsorsCurrentData).map(([_,item]) => item);
  const divisions = Object.entries(divisionsData).map(([_, item]) => item);
  const faqs = Object.entries(faqsData).map(([_, item]) => item);
  const achievements = Object.entries(achievementsData).map(
    ([_, item]) => item
  );
  const testimonials = Object.entries(testimonialsData).map(
    ([_, item]) => item
  );
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
      sponsors: sponsors,
      sponsors_current: sponsors_current,
      robots: robots,
      divisions: divisions,
      achievements: achievements,
      testimonials: testimonials,
      faqs: faqs,
    },
  };
}
