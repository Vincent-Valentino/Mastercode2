import { SearchBar } from "../components/aceternity/searchBar"
import { LanguageCourse, FrameworkCourse, DevToolsCourse, ForYouCourse } from "./widgetMini"
import { Button } from "../components/general/button"
import  News  from "./newsWidget"
import { Goals } from "./goalsWidget"
import Activity from "./activityWidget"
import History from "./historyWidget"
import Projects from "./projectWidget"

export const Header = () => {
  const placeholders = [
    "Python",
    "Javascript",
    "Go",
    "Rust",
    "Typescript",
    "C++",
    "Java",
    "C#",
    "Elixir",
    "Ruby",
    "Vue",
    "Ruby On Rails",
    "Svelte",
    "React",
    "Angular",
    "Django"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return(
    <div className="h-20 w-11/12 mx-10 mt-5 bg-transparent flex justify-between items-center">
      <SearchBar 
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="flex gap-4">
        <Button size="icon" className="bg-white rounded-full">
          <img src="/utils/calendar.svg" alt="Mail" className="size-16 p-2" />
        </Button>
        <Button size="icon" className="bg-white rounded-full">
          <img src="/utils/mail.svg" alt="Mail" className="size-16 p-2" />
        </Button>
        <Button size="icon" className="bg-white rounded-full">
          <img src="/utils/notif.svg" alt="Notification" className="size-16 p-2" />
        </Button>
      </div>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="border border-neutral-700 bg-neutral-900 flex flex-col gap-4 flex-1 w-full h-full overflow-y-auto">
        <Header/>
        <div className="p-2 md:px-10 md:pt-5 md:pb-5 flex flex-col flex-1 w-full h-full">
          <h1 className="text-white ml-3 flex items-center gap-1 mb-0.5"><img src="/utils/menu.svg" className="size-3"/>Menu</h1>
          <div className="flex gap-4 mb-4">
              <LanguageCourse />
              <FrameworkCourse />
              <DevToolsCourse />
              <ForYouCourse />
          </div>
          <div className="grid grid-cols-4 grid-rows-2 gap-x-6 mt-4 pb-10 w-full h-full">
            <Goals/>
            <Activity />
            <History />
            <Projects/>
            <div>
              <h1 className="text-white ml-2 mt-4 flex items-center gap-1 mb-1"><img src="/utils/news.svg" className="size-4"/>News</h1>
              <News page={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;