import SectionContact from "@components/section/contact/SectionContact";
import MapContact from "@components/map/contact/MapContact";
import Footer from "@components/footer/Footer";
import { readData } from "@utils/jsonify";

const Contact = () => {
  return (
    <>
      <SectionContact />
      <MapContact />
      <Footer />
    </>
  );
};

export default Contact;
