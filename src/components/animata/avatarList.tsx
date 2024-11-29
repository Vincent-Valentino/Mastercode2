import { cn } from "../../lib/utils";

const data = [
  {
    name: "Go Basic",
    desc: "Go or Golang",
    image: "/program/go.svg",
    color: "bg-red-600",
  },
  {
    name: "Python Basic",
    desc: "You Knows How To Loops",
    image: "/program/python.svg",
    color: "bg-red-600",
  },
  {
    name: "Python OOP",
    desc: "Everything is a class in Python",
    image: "/program/python.svg",
    color: "bg-black",
  },
  {
    name: "Automation With Python",
    desc: "Scripter?",
    image: "/program/python.svg",
    color: "bg-blue-400",
  },
  {
    name: "Java Advanced",
    desc: "OOP Certified",
    image: "/program/java.svg",
    color: "bg-amber-200",
  },
  {
    name: "Django: Python Backend",
    desc: "Dj",
    image: "/python/main/django.svg",
    color: "bg-cyan-200",
  },
];

export default function AvatarList({
  size = "md",
  className,
  single = false,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  single?: boolean;
}) {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    lg: "m-3 size-6",
    md: "m-2 size-12",
    sm: "m-1 size-8",
  };

  return (
    <div className={cn("flex py-12 justify-center", className)}>
      {!single ? (
        data.map((item) => (
          <div
            key={item.name}
            className="group  relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
          >
            <div className={cn("relative overflow-hidden rounded-full", item.color)}>
              <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
              <div className="z-1 blur-lg" />
              <img
                src={item.image}
                alt={item.name}
                className={cn("rounded-full object-cover", sizes[size] ?? sizes.md)}
              />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-sm">{item.desc}</div>
            </div>
          </div>
        ))
      ) : (
        <>
          <div key={data[0].name} className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110">
            <div className={cn("relative overflow-hidden rounded-full", data[0].color)}>
              <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
                <div className="z-1 blur-lg" />
                  <img
                    src={data[0].image}
                    alt={data[0].name}
                    className={cn("rounded-full object-cover", sizes[size] ?? sizes.md)}
                  />
            </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
                <div className="text-sm font-semibold">{data[0].name}</div>
                <div className="text-sm">{data[0].desc}</div>
              </div>
          </div>
          <div className="cursor-pointer group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110">
            <div className={cn("relative overflow-hidden rounded-full", "bg-cyan-300")}>
              <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
              <div className="z-1 blur-lg" />
              <p className={cn("text-center text-3xl  rounded-full object-cover", sizes[size] ?? sizes.md)}>...</p>
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
              <div className="text-sm font-semibold">Hi Coder</div>
              <div className="text-sm">You Achieve 21 Awards</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
