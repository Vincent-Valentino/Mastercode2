import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./navbar-menu";
import { cn } from "../../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4"/>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed text-xs md:text-base top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Frontend">
          <div className="grid grid-cols-3 gap-2 md:gap-4 p-1 md:p-2">
            <HoveredLink href="/go">HTML</HoveredLink>
            <HoveredLink href="/rust">CSS</HoveredLink>
            <HoveredLink href="/c#">Javascript</HoveredLink>
            <HoveredLink href="/typescript">React</HoveredLink>
            <HoveredLink href="/go">Vue</HoveredLink>
            <HoveredLink href="/rust">Angular</HoveredLink>
            <HoveredLink href="/c#">Svelte</HoveredLink>
            <HoveredLink href="/typescript">Next.js</HoveredLink>
            <HoveredLink href="/typescript">Typescript</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Backend">
          <div className="grid grid-cols-3 gap-2 md:gap-4 p-1 md:p-2">
            <HoveredLink href="/go">Express</HoveredLink>
            <HoveredLink href="/rust">Nest.js</HoveredLink>
            <HoveredLink href="/c#">Django</HoveredLink>
            <HoveredLink href="/go">Flask</HoveredLink>
            <HoveredLink href="/rust">Gin</HoveredLink>
            <HoveredLink href="/c#">Ruby on Rails</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Low-Level">
          <div className="grid grid-cols-3 gap-2 md:gap-4 p-1 md:p-2">
            <HoveredLink href="/go">Rust</HoveredLink>
            <HoveredLink href="/rust">C</HoveredLink>
            <HoveredLink href="/c#">C++</HoveredLink>
            <HoveredLink href="/typescript">Assembly</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Data">
          <div className="grid grid-cols-3 gap-2 md:gap-4 p-1 md:p-2">
            <HoveredLink href="/go">Python</HoveredLink>
            <HoveredLink href="/rust">SQL</HoveredLink>
            <HoveredLink href="/c#">MongoDB</HoveredLink>
            <HoveredLink href="/typescript">Redis</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
