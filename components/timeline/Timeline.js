const Timeline = ({ achievements }) => {
  return (
    <section className="bg-background text-gray-100">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-secondary-500">
              <h3 className="text-3xl font-semibold">Timeline</h3>
              <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                Our achievements
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              {achievements.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-secondary-500"
                >
                  <h3 className="text-xl text-primary-400 font-semibold tracking-wide">
                    {item.name}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400">
                    {item.time}
                  </time>
                  <p className="mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
