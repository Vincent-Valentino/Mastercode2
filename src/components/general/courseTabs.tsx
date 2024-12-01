import { motion } from 'framer-motion'
import { useState } from 'react'

interface TabProps {
  text: string
  selected: boolean
  setSelected: (text: string) => void
}

const Tab = ({ text, selected, setSelected}: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? 'text-white'
          : 'text-black hover:bg-blue-500 dark:hover:text-gray-100'
      } relative rounded-md px-2 md:px-4 bg-white py-1 md:py-2 mt-5 md:mt-10 text-xs font-medium transition-colors`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: 'spring', duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-blue-900"
        ></motion.span>
      )}
    </button>
  )
}

const CourseTabs:React.FC = () => {
  const tabs = ["Featured", "General","Web Development","Programming Language","Machine Learning", "Data Analyst"]
  const [selected, setSelected] = useState<string>(tabs[0])
  return (
    <>
      <h1 className="text-3xl font-thin">Courses</h1>
      <div className="mb-2 md:mb-8 flex flex-wrap items-center gap-1 md:gap-2">
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
      {selected === "Featured" ? (
        <FeaturedCourse/>
      ) : selected === "General" ? (
        <GeneralCourse/>
      ) : (
        <div>None</div>
      )}
    </>
  )
}

export default CourseTabs;

// Featured Tabs Content
const FeaturedCourse = () => {

  return (
    <div className="w-full px-6 py-5 min-h-screen bg-white rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-stone-300 w-full h-72 rounded-md flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <img src="/go/course/basics.jpg" alt="Go Basics Course" className="w-full h-48 rounded-t-md" />
          <h1 className="font-roboto text-lg p-2 font-bold text-center line-clamp-1">Go, For Beginner</h1>
          <h2 className="font-roboto text-sm font-light text-center text-gray-700">Master The "C of 2000s"</h2>
        </div>

        <div className="bg-stone-900 w-full h-72 rounded-md flex flex-col transition-all duration-700 transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <img src="/go/course/threading.jpg" alt="Go Goroutines Course" className="w-full h-48 rounded-t-md" />
          <h1 className="font-roboto text-lg p-2 font-bold text-neutral-50 text-center line-clamp-1">Go: Mastering the Goroutines</h1>
          <h2 className="font-roboto text-xs font-light text-center text-zinc-100">Learn the purpose of multi-threading</h2>
        </div>

        <div className="bg-stone-300 w-full h-72 rounded-md flex flex-col justify-center items-center transition-all duration-700 transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <h2 className="font-roboto text-lg text-center text-gray-500">Coming Soon</h2>
        </div>
      </div>
    </div>
  );
};

// General Tabs Course
const GeneralCourse = () => {
  return(
    <div className="w-full px-6 py-5 min-h-screen bg-white rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-stone-300 w-full h-72 rounded-md flex flex-col justify-center items-center transition-all duration-700 transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <h2 className="font-roboto text-lg text-center text-gray-500">Coming Soon</h2>
        </div>
      </div>
    </div>
  )
}

