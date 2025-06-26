import Footer from "@components/footer/Footer";
import HeaderTeam from "@components/header/team/HeaderTeam";
import SectionMember from "@components/section/member/SectionMember";
import SectionPreviousMember from "@components/section/member/SectionPreviousMember";
import { readData } from "@utils/jsonify";

const Team = ({ divisions, previousMembers }) => {
  return (
    <>
      <HeaderTeam divisions={divisions} />
      <div>
        {divisions.map((data) => (
          <SectionMember key={data.name} division={data} />
        ))}
        {previousMembers && previousMembers.length > 0 && (
          <SectionPreviousMember previousMembers={previousMembers} />
        )}
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const membersData = readData("member/currentMember.json");
  const divisionsData = readData("divisions.json");
  let previousMembers = [];
  try {
    previousMembers = Object.values(readData("member/previousMember.json"));
  } catch {
    previousMembers = [];
  }

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
      previousMembers: previousMembers,
    },
  };
}

export default Team;