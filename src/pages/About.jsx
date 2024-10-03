const About = () => {
  return (
    <div className="container mx-auto">
      <article className="max-w-2xl mx-auto bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 relative mb-12 rounded-3xl transform -rotate-6 translate-y-14 lg:p-4 font-body">
        <div className="bg-white h-full transform rotate-6 lg:p-16 px-6 py-4 shadow-lg lg:rounded-3xl">
          <h2 className="text-4xl font-extrabold my-4">
            More about my role
          </h2>
          <p className="text-lg my-2">
            Farmers are the backbone of agriculture, responsible for cultivating
            crops and raising livestock to meet the world&apos;s food demands. Their
            work involves preparing the land, planting seeds, irrigating crops,
            and harvesting produce, which is then distributed to markets and
            communities. Farmers also manage livestock, providing essential
            products like meat, milk, and wool. With advancements in technology,
            many farmers now utilize machinery, irrigation systems, and
            data-driven farming techniques to improve efficiency and yield.
            Despite these advancements, farming remains a physically demanding
            job, requiring long hours and adaptability to weather conditions and
            market fluctuations.
          </p>

          <h2 className="text-4xl font-extrabold my-4">Other Fact</h2>
          <p className="text-lg my-2 mb-6">
            In addition to producing food, farmers play a critical role in
            maintaining the health of ecosystems by managing soil quality, water
            usage, and biodiversity on their farms. They often face challenges
            such as unpredictable weather patterns, pest infestations, and
            fluctuating prices in global markets, which can impact their
            livelihoods. However, farmers are resilient and continuously
            innovate to overcome these obstacles, ensuring food security for
            local and global populations. As stewards of the land, they also
            contribute to sustainable agricultural practices, focusing on
            reducing environmental impact while increasing productivity to meet
            the growing food demands of an expanding population.
          </p>
        </div>
      </article>
    </div>
  );
};

export default About;
