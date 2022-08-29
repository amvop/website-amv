const FAQ = ({ faqs }) => {
  return (
    <section className="py-10 bg-background  text-white font-body">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl text-primary-400 font-semibold font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-md md:text-lg mt-4 mb-8 dark:text-gray-400">
            If you have any questions that we haven&apos;t been able to answer,
            we would love to hear from you! feel free to contact us
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details key={i} className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                {item.question}
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
