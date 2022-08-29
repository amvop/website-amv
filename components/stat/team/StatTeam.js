const StatTeam = () => {
  return (
    <section className="text-white bg-gray-900">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold sm:text-6xl">
            It&apos;s a great product
          </h2>

          <p className="mt-4 sm:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            praesentium aut nam vel adipisci sunt provident quisquam temporibus
            doloribus maiores!
          </p>
        </div>

        <ul className="mt-8 border-2 border-white border-opacity-25 divide-y-2 divide-white sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3">
          <li className="p-8">
            <p className="text-3xl font-extrabold">100+</p>
            <p className="mt-1 text-xl font-medium">Something</p>
          </li>

          <li className="p-8">
            <p className="text-3xl font-extrabold">5000</p>
            <p className="mt-1 text-xl font-medium">Things</p>
          </li>

          <li className="p-8">
            <p className="text-3xl font-extrabold">50</p>
            <p className="mt-1 text-xl font-medium">Items</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StatTeam;
