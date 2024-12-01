import { motion } from 'framer-motion'
import { useState } from 'react'
import { GoSelection } from '../../courseProgram/go/goComparasion'
import { RustSelection } from "../../courseProgram/rust/rustComparasion"

interface ComparasionTabsProps {
  tabs: string[];
  language?: string;
}

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
      } relative rounded-md px-2 md:px-4 bg-white py-1 md:py-2 mt-5 md:mt-20 text-xs md:text-sm font-medium transition-colors`}
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

const ComparasionTabs:React.FC<ComparasionTabsProps> = ({tabs, language}) => {
  const [selected, setSelected] = useState<string>(tabs[0])
  return (
    <>
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
      {language === "Rust" ? (
      <RustSelection section={`Rust vs ${selected}`}/>
      ) : (
      <GoSelection section={`Go vs ${selected}`}/>
      )}
    </>
  )
}

export default ComparasionTabs;