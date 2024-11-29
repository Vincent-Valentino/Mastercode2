import { motion } from "framer-motion";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../components/aceternity/sidebar";
import { cn } from "../lib/utils";
import Dashboard from "./dashboard";
import Profile from "./profile";

export function SidebarDemo() {
  let selectedSection: string = ""
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
    }
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded- flex flex-col md:flex-row bg-neutral-800 w-full flex-1 mx-auto border border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 ml-1 flex flex-col gap-4">
              {links.map((link, idx) => (
                <SidebarLink link={link} key={idx} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {selectedSection === 'Dashboard' ? (
      <Dashboard />
    ) : selectedSection === 'Profile' ? (
      <Profile />
    ) : (
      <Dashboard />
    )}
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
        className="font-black text-2xl ml-3 text-white whitespace-pre"
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
      className="font-black text-white text-3xl flex space-x-2 items-center py-1 relative z-20"
    >
      M
    </a>
  );
};