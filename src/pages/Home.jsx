const Home = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src="https://npr.brightspotcdn.com/dims4/default/4d0d244/2147483647/strip/true/crop/878x593+0+0/resize/880x594!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F31%2Fdb%2F7e1d395a445fba229e9696a3a7e4%2Ffarmer-lee-jones.jpg"
          />
        </div>

        <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
          Chad Farmer
        </h2>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
          A person who cultivates land and raises crops or livestock for food
          production and agriculture. Farmers play a crucial role in sustaining
          communities by providing essential food and raw materials. They often
          work long hours in various weather conditions, utilizing both
          traditional methods and modern technology. In addition to growing
          crops, some farmers manage livestock, contributing to the production
          of meat, dairy, and other animal-based products
        </p>

        <div className="flex justify-end mt-4">
          <a
            href="#"
            className="text-lg font-medium text-blue-600 dark:text-blue-300"
            tabIndex="0"
            role="link"
          >
            Irfan
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
