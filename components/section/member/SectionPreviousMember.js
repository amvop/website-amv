import { Badge } from "@chakra-ui/react";
import CardMember from "@components/card/member/CardMember";
import { useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const SectionPreviousMember = ({ previousMembers }) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(isLargerThan768 ? 100 : 260);

  const members = isLargerThan768
    ? [...previousMembers, ...previousMembers]
    : previousMembers;

  useEffect(() => {
    if (!isLargerThan768) {
      setMaxHeight(260);
      return;
    }
    setTimeout(() => {
      const heights = cardRefs.current.map(ref => ref?.offsetHeight || 0);
      const max = Math.max(...heights, 160);
      setMaxHeight(max);
    }, 100);
  }, [isLargerThan768, previousMembers]);

  useEffect(() => {
    if (!isLargerThan768 || !scrollRef.current) return;
    const scrollContainer = scrollRef.current;

    const interval = setInterval(() => {
      if (!scrollContainer) return;
      scrollContainer.scrollBy({ left: 260, behavior: "smooth" });

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollTo({ left: 0, behavior: "auto" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isLargerThan768, previousMembers]);

  return (
    <section className="py-10 bg-gray-800 text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          <Badge p={2} m={2} fontSize={"sm"} colorScheme={"red"}>
            Older Members
          </Badge>
        </p>
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          Alumni & Previous Team Members
        </h1>
        <div className="w-full h-full flex items-center justify-center mt-8">
          <div
            ref={scrollRef}
            className="flex gap-4 mt-8 flex-row overflow-x-auto custom-scrollbar"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: isLargerThan768 ? "x mandatory" : "none",
              paddingBottom: isLargerThan768 ? "8px" : "0",
              height: maxHeight + 100,
            }}
          >
            {members.map((item, idx) => (
              <div
                key={item.name + idx}
                ref={el => (cardRefs.current[idx] = el)}
                style={{
                  minWidth: isLargerThan768 ? 260 : undefined,
                  scrollSnapAlign: isLargerThan768 ? "start" : undefined,
                  height: maxHeight + 25,
                  transition: "height 0.2s",
                }}
              >
                <CardMember member={item} height={maxHeight} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome/Safari/Webkit */
        }
      `}</style>
    </section>
  );
};

export default SectionPreviousMember;