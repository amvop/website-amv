import CardBlog from "@components/card/blog/CardBlog";

const SectionBlog = () => {
  return (
    <section className="bg-background w-full h-full">
      <div className="w-full px-4 py-24 mx-auto bg-background max-w-7xl md:w-4/5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3">
            <CardBlog />
          </div>
          <div>
            <CardBlog />
          </div>
          <div>
            <CardBlog />
          </div>
          <div>
            <CardBlog />
          </div>
          <div>
            <CardBlog />
          </div>
          <div>
            <CardBlog />
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
      <a
        href="#"
        className="w-full rounded-full btn btn-light btn-xl md:w-auto"
      >
        Previous Page
      </a>
      <a
        href="#"
        className="w-full rounded-full btn btn-light btn-xl md:w-auto"
      >
        Next Page
      </a>
    </div> */}
      </div>
    </section>
  );
};

export default SectionBlog;
