// not used components, remove later


import BarChart from "./barChart";
import AvatarList from "./avatarList";
import Report from "./skeletonReport";
import { cn } from "../../lib/utils";

// #region placeholder
function BoldCopy({
  text = "animata",
  className,
  textClassName,
  backgroundTextClassName,
}: {
  text: string;
  className?: string;
  textClassName?: string;
  backgroundTextClassName?: string;
}) {
  if (!text?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "group relative flex items-center justify-center bg-background px-2 py-2 md:px-6 md:py-4",
        className,
      )}
    >
      <div
        className={cn(
          "text-2xl font-black uppercase text-foreground/15 transition-all group-hover:opacity-50 md:text-8xl",
          backgroundTextClassName,
        )}
      >
        {text}
      </div>
      <div
        className={cn(
          "text-md absolute font-black uppercase text-foreground transition-all group-hover:text-4xl md:text-3xl group-hover:md:text-8xl",
          textClassName,
        )}
      >
        {text}
      </div>
    </div>
  );
}

function BentoCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden rounded-md", className)}>
      {children}
    </div>
  );
}

function FeatureOne() {
  return (
    <BentoCard className="flex flex-col-reverse bg-yellow-400 hover:scale-95 transition-all duration-500 cursor-pointer border-yellow-500 border-2 shadow-yellow-600 shadow-sm">
      <div className="font-bold text-yellow-700 text-end text-sm w-full bg-neutral-800 px-3 py-1">On Going</div>
      <p className="text-center">Rust Basics</p>
      <img src="/program/rust.svg" alt="rust" className="size-28 p-1 self-center"/>
    </BentoCard>
  );
}

function FeatureTwo() {
  return (
    <BentoCard className="relative flex flex-col-reverse overflow-visible bg-violet-700 sm:col-span-2 border-violet-900 border-2 shadow-violet-950 shadow-sm">
      <div className="font-bold text-violet-700 text-end text-sm w-full bg-neutral-800 px-3 py-1">Achievements</div>
      <div className="ml-4 mt-auto p-4">
        <AvatarList size="sm" className="py-0 px-1" />
      </div>
    </BentoCard>
  );
}

function FeatureThree() {
  return (
    <BentoCard className="flex flex-col-reverse bg-orange-400">
      <div className="font-bold text-orange-700 text-end text-sm w-full bg-orange-300 px-3 py-1">Fun Facts</div>
    </BentoCard>
  );
}

function FeatureFour() {
  return (
    <BentoCard className="flex items-center gap-4 bg-lime-300 sm:col-span-2 md:flex-row-reverse">
      <div className="text-2xl font-black text-lime-800">Generate progress report</div>
      <div className="relative max-h-32 flex-shrink-0 overflow-hidden">
        <Report className="w-auto overflow-hidden border-none shadow-none hover:shadow-none" />
      </div>
    </BentoCard>
  );
}

function FeatureFive() {
  return (
    <BentoCard className="flex flex-col items-center justify-center bg-zinc-300 sm:col-span-2">
      <BoldCopy text="EDU" className="bg-transparent" textClassName="text-zinc-800" />
    </BentoCard>
  );
}

export function Chart() {
  return (
    <BentoCard className="bg-neutral-950 h-1/2 rounded-b-lg rounded-t-none p-12">
      <BarChart
        items={[
          { progress: 100, label: "20 Nov (Completed 10)", className: "rounded-xl bg-green-400" },
          { progress: 70, label: "21 Nov (Completed 7)", className: "rounded-xl bg-blue-400" },
          { progress: 40, label: "22 Nov (Completed 4)", className: "rounded-xl bg-yellow-400" },
          { progress: 60, label: "23 Nov (Completed 6)", className: "rounded-xl bg-blue-400" },
          { progress: 20, label: "24 Nov (Completed 2)", className: "rounded-xl bg-red-400" },
          { progress: 30, label: "25 Nov (Completed 3)", className: "rounded-xl bg-red-400" },
          { progress: 90, label: "26 Nov (Completed 9)", className: "rounded-xl bg-green-400" },
        ]}
        height={150}
      />
      <div className="mt-2 text-center text-white font-mono font-bold">Last Seven Days</div>
    </BentoCard>
  );
}

// #endregion

export function Eight() {
  return (
    <div className="storybook-fix w-full pt-3 px-3 flex items-center justify-center">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:grid-rows-3">
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        <FeatureFive />
      </div>
    </div>
  );
}
