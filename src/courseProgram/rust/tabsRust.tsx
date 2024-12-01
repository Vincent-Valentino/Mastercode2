import { Tabs } from "../../components/aceternity/tabs";
import Marquee from "../../components/animata/marquee";
import { LinkPreview } from "../../components/aceternity/linkPreview";
import { Button } from "../../components/general/button"
import ComparasionTabs from "../../components/general/comparasionTabs";

export function TabsDemo({ Content }: any) {
  const tabs = [
    {
      title: "What is Rust?",
      value: "opening",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-orange-50 bg-gradient-to-br from-orange-700 to-red-950">
          <p>What is Rust?</p>
          <p className="text-base md:text-xl text-red-50 mt-5">
            Rust is a systems programming language that focuses on speed, memory safety, and parallelism. It's great for building reliable and efficient software, from operating systems to web applications. Developers love Rust for its modern features, friendly compiler, and strong guarantees against common bugs like null pointer dereferences and data races.
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Who use Rust?",
      value: "main-1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-orange-200 bg-gradient-to-br from-red-950 to-amber-900">
          <p>Who use Rust ?</p>
          <div className="storybook-fix mt-20 relative flex h-full max-h-32 min-h-32 w-full items-center justify-center overflow-hidden rounded border bg-background">
            <Marquee pauseOnHover repeat={5}>
              <Content />
            </Marquee>
          </div>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Comparison",
      value: "comparison",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-amber-950 bg-gradient-to-br from-amber-200 to-orange-200">
          <p>Comparison with another language</p>
          <ComparasionTabs tabs={["Go","C++","C","Java"]} language="rust"/>
        </div>
      ),
    },
    {
      title: "Resources",
      value: "resources",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-blue-100 bg-gradient-to-br from-zinc-950 to-neutral-900">
          <p>Resources</p>
          <div className="flex flex-row gap-12 w-11/12 mx-auto mt-20">
            <LinkPreview url="https://go.dev/doc" className="text-lg bg-transparent text-center border-white border-2 py-1 px-3 rounded-3xl w-20px z-40">
              Go Documentation
            </LinkPreview>
            <LinkPreview url="https://gophercises.com/" className="text-lg bg-transparent text-center border-white border-2 py-1 px-3 rounded-3xl w-20px z-40">
              Gophercises
            </LinkPreview>
            <LinkPreview url="https://www.youtube.com/c/GolangCafe" className="text-lg bg-transparent text-center border-white border-2 py-1 px-3 rounded-3xl w-20px z-40">
              Golang Cafe (YT)
            </LinkPreview>
          </div>
          <div className="flex flex-row gap-12 w-11/12 mx-auto ml-40 mt-8">
            <LinkPreview side="bottom" url="https://www.freecodecamp.org/" className="text-lg bg-transparent text-center border-white border-2 py-1 px-3 rounded-3xl w-20px z-40">
              FreeCodeCamp
            </LinkPreview>
            <LinkPreview side="bottom" url="https://awesome-go.com/" className="text-lg bg-transparent text-center border-white border-2 py-1 px-3 rounded-3xl w-20px z-40">
              Awesome Go
            </LinkPreview>
          </div>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Get Started",
      value: "getstarted",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-orange-400 to-amber-950">
          <p>Get Started with Rust</p>
          <div className="grid w-11/12 grid-cols-3 gap-10 justify-between mx-auto mt-12 z-50">
            
            <div className="text-white text-xl gap-3 flex flex-col text-center z-50">
              <h1>Install Rust</h1>
              <Button className="text-lg px-2 py-1 bg-black rounded">
                <img src="/program/rust.svg" className="h-full"/>
                <h1>Download Rust</h1>
              </Button>
            </div>
            
            <div className="text-white flex gap-3 flex-col text-center text-xl z-50">
              <h1>Choose Your Text Editor</h1>
              <Button className="text-lg px-2 py-1 bg-black rounded">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                  <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                </svg>
                <h1>Visual Studio Code</h1>
              </Button>

              <Button className="text-lg px-2 py-1 bg-white text-black rounded">
                <img src="/rust/rustrover.svg" className="h-full w-auto" />
                <h1>RustRover</h1>
              </Button>
            </div>

            <div className="text-white text-xl flex flex-col gap-3 text-center z-50">
              <h1>What Next?</h1>
              <Button className="text-lg px-2 py-1 bg-black rounded">
                <img src="/utils/dashboard.svg" className="h-full w-auto"/>
                <h1>Explore Dashboard</h1>
              </Button>
              <Button className="text-lg px-2 py-1 bg-white text-black rounded">
                <img src="/utils/browse.svg" className="h-full w-auto"/>
                <h1>Browse Others</h1>
              </Button>
              <Button className="text-lg px-2 py-1 bg-zinc-700 rounded">
                <img src="/program/rust.svg" className="h-full w-auto"/>
                <h1>Rust Courses</h1>
              </Button>
            </div>
          </div>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full text-black items-start justify-start mt-20">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <img
      src="/rust.svg"
      alt="Rust"
      width="500"
      height="500"
      className="object-cover object-center h-[60%] md:h-[50%] absolute -bottom-1 inset-x-0 w-[50%] rounded-xl mx-auto"
    />
  );
};

