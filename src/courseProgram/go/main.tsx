import { WavyBackground } from "../../components/aceternity/wavybg";
import { NavbarDemo } from "../../components/aceternity/navbar";
import { TabsDemo } from "./tabsGo";

interface MarqueeContentProps {
  name: string;
  image: string;
  desc: string;
}

const marqueeContent: MarqueeContentProps[] = [
  {
    name: "Google",
    image: "/go/company/google.svg",
    desc: "Uses Go for cloud services and container orchestration.",
  },
  {
    name: "Uber",
    image: "/go/company/uber.svg",
    desc: "Relies on Go for geolocation and backend systems.",
  },
  {
    name: "Dropbox",
    image: "/go/company/dropbox.svg",
    desc: "Rebuilt its file sync engine with Go.",
  },
  {
    name: "Paypal",
    image: "/go/company/paypal.svg",
    desc: "Uses Go to scale modern payment systems.",
  },
];

const Content = () => (
  marqueeContent.map((item) => (
    <div key={item.name} className="flex items-center w-[60vw] md:w-[30vw] shadow-black border-slate-700 space-x-3 p-2 border-4 md:space-x-6 my-2 md:p-4 bg-stone-950 shadow-md rounded-2xl cursor-pointer hover:scale-95 transition-all duration-500 hover:saturate-200">      
      <img src={item.image} alt={item.name} className="size-14 md:size-28 md:w-auto pl-3 md:py-3 md:h-full" />
      <div className="flex flex-col text-white w-full md:my-1">
        <div className="font-bold text-sm md:text-xl md:mb-3">{item.name}</div>
        <div className="text-[0.5rem] md:text-sm line-clamp-1">{item.desc}</div>
      </div>
    </div>
  ))
);

const Go = () => {
  return(
    <>
      <WavyBackground speed="fast" colors={["#11e880","#0040f9","#0080f9","#00f9de","#1ca495"]}>
        <NavbarDemo/>
        <div className="text-white w-full font-geo mt-[24rem] pl-3 md:pl-20">
          <h1 className="text-9xl mb-2 text-cyan-400 font-roboto ">Go</h1>
          <p className="text-2xl ml-2 text-blue-400">Fast, Simple, and Scalable</p>
        </div>
      </WavyBackground>
      <TabsDemo Content={Content}/>
    </>
  )
}

export default Go;