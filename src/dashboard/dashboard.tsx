import { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "../components/aceternity/sidebar"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"
import { SearchBar } from "../components/aceternity/searchBar"
import { LanguageCourse, FrameworkCourse, DevToolsCourse, ForYouCourse } from "./widgetMini"
import { Button } from "../components/general/button"
import { News } from "./widgetLarge"

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: "/utils/dashboard2.svg"

    },
    {
      label: "Profile",
      href: "#",
      icon: "/utils/profile.svg"
    },
    {
      label: "Settings",
      href: "#",
      icon: "/utils/settings.svg"
    },
    {
      label: "Logout",
      href: "#",
      icon: "/utils/logout.svg"
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-neutral-800 w-full flex-1 mx-auto borderborder-neutral-700 overflow-hidden",
        "h-[60vh] md:h-[130vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink link={link} key={idx} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-3xl ml-5 text-white whitespace-pre"
      >
        MasterCode
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
    </a>
  );
};

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
      <div className="rounded-tl-2xl border border-neutral-700 bg-neutral-900 flex flex-col gap-4 flex-1 w-full h-full">
        <Header/>
        <div className="p-2 md:px-10 md:pt-5 md:pb-10 flex flex-col gap-4 flex-1 w-full h-full">
          <div className="flex gap-4 mb-4">
              <LanguageCourse />
              <FrameworkCourse />
              <DevToolsCourse />
              <ForYouCourse />
          </div>
          <div className="flex gap-4 flex-1">
              <News page={2} />
              <div className="h-[50vh] w-3/5 rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          </div>
          <div className="flex gap-4 flex-1">
              <div className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
