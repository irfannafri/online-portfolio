const Awards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          My Chad Awards
        </h1>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">🏅</span>
            <p>National Agricultural Excellence Award: Recognized for outstanding contributions to sustainable farming practices and food security.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">🌱</span>
            <p>Best Organic Farmer Award: Awarded for excellence in organic farming, promoting eco-friendly and sustainable agricultural practices.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">🏆</span>
            <p>Innovative Farming Techniques Award: Recognized for adopting innovative methods and technology that significantly improve yield and efficiency.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">🌍</span>
            <p>Global Agricultural Sustainability Award: Given to farmers who lead initiatives in environmental preservation and sustainable farming practices.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">💡</span>
            <p>Outstanding Agricultural Educator Award: Honored for contributions to educating the next generation of farmers and promoting agricultural literacy.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">🚜</span>
            <p>Farmer of the Year Award: Awarded to the most outstanding farmer in a specific region for consistent hard work, productivity, and community impact.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">💧</span>
            <p>Water Conservation Leader Award: Recognized for excellence in implementing water-saving technologies and sustainable irrigation practices.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">🏡</span>
            <p>Community Impact Award: Honored for significant contributions to local communities, including educational support, job creation, and environmental stewardship.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">🌾</span>
            <p>Crop Yield Achievement Award: Recognized for achieving exceptional crop yields through modern farming techniques, resource management, and innovation.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-yellow-500">📈</span>
            <p>Business Growth Award: Given to farmers who have significantly grown their agricultural business through entrepreneurial spirit and effective management practices.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Awards