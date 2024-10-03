const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
      <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
        My Experiences
      </h1>

      {/* Experience 1 - List Style */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Farm Management</h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start space-x-2">
            <span className="text-green-500">🌱</span>
            <p>Managed over 200 acres of farmland, optimizing crop rotation to maintain soil health and maximize yield.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-green-500">💧</span>
            <p>Implemented drip irrigation systems, reducing water consumption by 30% while increasing crop productivity.</p>
          </li>
        </ul>
      </div>

      {/* Experience 2 - Grid Style */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Livestock Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="font-bold text-indigo-700 mb-2">Cattle Farming</h3>
            <p className="text-gray-600">Raised and managed 150 head of cattle, ensuring proper nutrition, healthcare, and breeding.</p>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="font-bold text-indigo-700 mb-2">Poultry Farming</h3>
            <p className="text-gray-600">Built and maintained poultry houses, increasing egg production by 20% through better management techniques.</p>
          </div>
        </div>
      </div>

      {/* Experience 3 - Icon Style */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-indigo-600 mb-4">Sustainable Farming</h2>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-2xl">♻️</span>
            <p className="text-lg">Adopted organic farming practices, eliminating chemical pesticides and using compost to improve soil fertility.</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500 text-2xl">🌍</span>
            <p className="text-lg">Launched a water conservation initiative, reducing irrigation costs by implementing smart sensors and rainwater harvesting systems.</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  )
}

export default Experience