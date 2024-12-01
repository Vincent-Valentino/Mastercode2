import CourseTabs from "../components/general/courseTabs"

const Course = () => {
  return(
    <div className="w-full h-screen flex">
      <div className="bg-zinc-50 w-[75%] h-full px-12 py-8 flex flex-col font-open-sans overflow-y-auto no-visible-scrollbar ">
        <CourseTabs/>
      </div>
      <div className="w-[25%] h-full bg-stone-100">

      </div>
    </div>
  )
}

export default Course