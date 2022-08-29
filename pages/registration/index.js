import Footer from "@components/footer/Footer";
import SectionRegistration from "@components/section/registration/SectionRegistration";

const RegistrationPage = () => {
  return (
    <>
      <SectionRegistration />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default RegistrationPage;
