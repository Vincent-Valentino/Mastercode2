import { ShootingStars } from "../components/aceternity/shootingstars";
import { StarsBackground } from "../components/aceternity/starbg";
import { NavbarDemo } from "../components/aceternity/navbar";
import { motion } from "framer-motion";
import { IconCloudDemo } from "../components/magicui/cloudiconscomps";
import Marquee from "../components/animata/marquee";
import Button from "../components/general/shimmerButton";
import AnimatedText from "../home/textAnimation";

interface MarqueeContentProps {
  name: string;
  image: string;
  desc: string;
}

const marqueeContent: MarqueeContentProps[] = [
  {
    name: "Python",
    image: "/program/python.svg",
    desc: "Created by Guido van Rossum, Python is a dynamically typed language known for its readability and extensive libraries. Widely used in AI, machine learning, web development, and automation.",
  },
  {
    name: "JavaScript",
    image: "/program/js.svg",
    desc: "Developed by Brendan Eich at Netscape, JavaScript is the versatile language of the web, enabling interactive client-side scripts and server-side development with Node.js.",
  },
  {
    name: "TypeScript",
    image: "/program/ts.svg",
    desc: "Maintained by Microsoft, TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, enhancing code maintainability in large-scale applications.",
  },
  {
    name: "Go",
    image: "/program/go.svg",
    desc: "Designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson, Go is known for its simplicity and efficient concurrency model, ideal for cloud services and infrastructure tools.",
  },
  {
    name: "Rust",
    image: "/program/rust.svg",
    desc: "Developed by Mozilla, Rust focuses on safety and performance without a garbage collector, guaranteeing memory safety through its ownership model.",
  },
  {
    name: "Java",
    image: "/program/java.svg",
    desc: "Created by James Gosling at Sun Microsystems, Java is a widely-used object-oriented language designed for portability across platforms via the Java Virtual Machine (JVM).",
  },
  {
    name: "Ruby",
    image: "/program/ruby.svg",
    desc: "Developed by Yukihiro Matsumoto, Ruby is a dynamic, open-source language emphasizing simplicity and productivity, popularized by the Ruby on Rails web framework.",
  },
  {
    name: "Elixir",
    image: "/program/elixir.svg",
    desc: "Created by José Valim, Elixir is a functional, concurrent language built on the Erlang VM, known for scalable, maintainable applications in real-time systems.",
  },
  {
    name: "React",
    image: "/program/react.svg",
    desc: "Developed by Facebook, React is a JavaScript library for building user interfaces using a component-based architecture and a virtual DOM for efficient rendering.",
  },
  {
    name: "Vue",
    image: "/program/vue.svg",
    desc: "Created by Evan You, Vue.js is a progressive JavaScript framework for building user interfaces, praised for its simplicity and ease of integration with existing projects.",
  },
];


const Content = () => (
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

const Home = () => {
  return(
    <>
      <div className="w-full h-[125vh] flex flex-col justify-center bg-black">
        <ShootingStars minDelay={200} maxDelay={1000}/>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative font-luckiestguy flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-6xl text-white text-center">
              MASTERCODE
            </div>
            <div className="text-xl md:text-3xl font-extralight text-stone-100 text-center">
              Master your skills, Improve your codes
            </div>
            <div className="flex gap-4 mt-3 font-mono">
              <Button background="#000000" className="z-20 text-neutral-50">Explore</Button>
              <Button background="#000000" className="z-20 text-neutral-50">New</Button>
            </div>
          </motion.div>
          <NavbarDemo/>
        <StarsBackground/>
        <div className="storybook-fix mt-20 relative flex h-full max-h-48 min-h-32 w-full items-center justify-center overflow-hidden rounded border bg-background">
          <Marquee pauseOnHover repeat={5}>
            <Content />
          </Marquee>
        </div>
      </div>
      <div className="w-full bg-stone-100 h-full px-4 md:px-0 flex flex-col-reverse justify-end md:grid md:grid-cols-2 md:justify-center py-12">
        <IconCloudDemo />
        <div className="md:pb-60 flex justify-center items-center pt-8">
          <h1 className="text-center text-4xl font-luckiestguy">Start your journey as <AnimatedText /></h1>
        </div>

      </div>
    </>
  );
}

export default Home;