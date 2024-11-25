import { WavyBackground } from "../../components/aceternity/wavybg";
import { NavbarDemo } from "../../components/aceternity/navbar";
import { TabsDemo } from "./tabsRust";

interface MarqueeContentProps {
  name: string;
  image: string;
  desc: string;
}

const marqueeContent: MarqueeContentProps[] = [
  {
    name: "Amazon Web Services (AWS)",
    image: "/rust/company/aws.svg",
    desc: "Adopted Rust for its lightweight virtualization technology, Firecracker.",
  },
  {
    name: "Discord",
    image: "/rust/company/discord.svg",
    desc: "Uses Rust to enhance the performance and reliability of its chat and voice systems.",
  },
  {
    name: "Cloudflare",
    image: "/rust/company/cloudflare.svg",
    desc: "Rust powers performance-critical components in Cloudflare’s edge computing infrastructure.",
  },
  {
    name: "Solana",
    image: "/rust/company/solana.svg",
    desc: "Built its high-performance blockchain entirely in Rust.",
  },
];


export const Content = () => (
  marqueeContent.map((item) => (
    <div key={item.name} className="flex items-center w-[85vw] md:w-[30vw] shadow-black border-slate-700 space-x-3 p-2 border-4 md:space-x-6 my-2 md:p-4 bg-stone-950 shadow-md rounded-2xl cursor-pointer hover:scale-95 transition-all duration-500 hover:saturate-200">
      <img src={item.image} alt={item.name} className="size-28 md:w-auto pl-3 py-3 md:h-full" />
      <div className="flex flex-col text-white w-full my-1">
        <div className="font-bold md:text-xl md:mb-3">{item.name}</div>
        <div className="text-xs text-wrap">{item.desc}</div>
      </div>
    </div>
  ))
);

const Rust = () => {
  return(
    <>
      <WavyBackground speed="fast" colors={["#e0e719","#ec421d","#c21515","#f97303","#640707"]}>
        <NavbarDemo/>
        <div className="text-white w-full font-geo mt-[24rem] pl-20">
          <h1 className="text-9xl ml-2 text-orange-600 font-roboto ">Rust</h1>
          <p className="text-2xl mb-2 text-amber-800">Safety, Speed, and Concurrency</p>
        </div>
      </WavyBackground>
      <TabsDemo Content={Content}/>
    </>
  )
}

export default Rust;