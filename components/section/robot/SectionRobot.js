import CardRobot from "@components/card/robot/CardRobot";
import { useEffect, useState } from "react";

const SectionRobot = ({ robots }) => {
  const tags = robots
    .map((robot) => robot.type)
    .filter((v, i, a) => a.indexOf(v) === i);

  const [selectedTags, setSelectedTags] = useState(tags);
  const [data, setData] = useState(robots);

  const onSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      selectedTags.splice(selectedTags.indexOf(tag), 1);
      setSelectedTags(selectedTags);
    } else {
      selectedTags.push(tag);
      setSelectedTags(selectedTags);
    }
  };

  const onApply = () => {
    setData(robots.filter((robot) => selectedTags.includes(robot.type)));
  };

  return (
    <section className="bg-background">
      <div className="max-w-screen-xl px-4 py-12 pb-20 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <div className="lg:sticky lg:top-4">
            <details
              open
              className="overflow-hidden border border-gray-200 rounded"
            >
              <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                <span className="text-sm font-medium">Toggle Filters</span>

                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>

              <form
                action=""
                className="border-t border-gray-200 lg:border-t-0 bg-white"
              >
                <fieldset>
                  <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                    Type
                  </legend>

                  <div className="px-5 py-6 space-y-2">
                    {tags.map((tag) => (
                      <div key={tag} className="flex items-center">
                        <input
                          id="toy"
                          type="checkbox"
                          name="type[toy]"
                          className="w-5 h-5 border-gray-300 rounded"
                          defaultChecked
                          onClick={() => {
                            onSelect(tag);
                          }}
                        />

                        <label
                          htmlFor="toy"
                          className="ml-3 text-sm font-medium"
                        >
                          {tag}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                  <button
                    name="commit"
                    type="button"
                    className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
                    onClick={() => {
                      onApply();
                    }}
                  >
                    Apply Filters
                  </button>
                </div>
              </form>
            </details>
          </div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.map((robot) => {
                return <CardRobot key={robot.name} robot={robot} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionRobot;
