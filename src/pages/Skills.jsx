const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          My Chad Skills
        </h1>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">🌱</span>
            <p>Crop management: Understanding planting, growing, and harvesting cycles for various crops.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">🐄</span>
            <p>Animal husbandry: Knowledge of raising and caring for livestock, including feeding, breeding, and health management.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">⚙️</span>
            <p>Mechanical skills: Ability to operate and maintain farming machinery and tools.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">💧</span>
            <p>Soil and water management: Expertise in managing soil quality, irrigation, and drainage systems for optimal crop growth.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">💼</span>
            <p>Business management: Skills in budgeting, financial planning, and market analysis to run a profitable farming operation.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">🔧</span>
            <p>Problem-solving: The ability to troubleshoot issues like pest infestations, diseases, or equipment malfunctions.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">💪</span>
            <p>Physical stamina: The endurance to perform physically demanding tasks, often in challenging weather conditions.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">🌍</span>
            <p>Environmental awareness: Knowledge of sustainable farming practices, including crop rotation, conservation, and waste management.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">⏳</span>
            <p>Time management: Organizing daily tasks efficiently to manage planting, harvesting, feeding, and other responsibilities.</p>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-500">🔄</span>
            <p>Adaptability: Being flexible and responsive to changes in weather, technology, and market demands.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills