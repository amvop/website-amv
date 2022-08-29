import Footer from "@components/footer/Footer";
import HeaderTeam from "@components/header/team/HeaderTeam";
import SectionMember from "@components/section/member/SectionMember";
import { readData } from "@utils/jsonify";

const Team = ({ divisions }) => {
  return (
    <>
      <HeaderTeam divisions={divisions} />
      <div>
        {divisions.map((data) => {
          return <SectionMember key={data.name} division={data} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const membersData = readData("members.json");
  const divisionsData = readData("divisions.json");
  const divisions = Object.entries(divisionsData).map(([_, item]) => {
    item.members = [];

    for (const [key, value] of Object.entries(membersData)) {
      if (key.split("_")[0] == item.code) {
        item.members.push(value);
      }
    }

    return item;
  });

  return {
    props: {
      divisions: divisions,
    },
  };
}

export default Team;
