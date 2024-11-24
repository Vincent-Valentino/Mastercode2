import { Tabs } from "../../components/aceternity/tabs";
import Marquee from "../../components/animata/marquee";
import GeneralTabs from "../../components/general/generalTabs"
import { LinkPreview } from "../../components/aceternity/linkPreview";
import { Button } from "../../components/general/button"

export function TabsDemo({ Content }: any) {
  const tabs = [
    {
      title: "What is Go?",
      value: "opening",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-cyan-50 bg-gradient-to-br from-cyan-500 to-cyan-800">
          <p>What is Go?</p>
          <p className="text-base md:text-xl text-cyan-200 mt-5">Go is a programming language made by Google to be simple, fast, and easy to use. It's great for building websites, apps, and tools that handle lots of tasks at once. Developers like it because it's quick, reliable, and works well for modern software projects like cloud systems and services.</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Who use Go?",
      value: "main-1",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-cyan-100 bg-gradient-to-br from-cyan-700 to-cyan-900">
          <p>Who use Go?</p>
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
      title: "Comparasion",
      value: "comparasion",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-blue-950 bg-gradient-to-br from-cyan-200 to-blue-200">
          <p>Comparision with another language</p>
          <GeneralTabs tabs={["Python","Java","C#","Rust"]}/>
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
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-400 to-violet-950">
          <p>Get Started with Go</p>
          <div className="grid w-11/12 grid-cols-3 gap-10 justify-between mx-auto mt-12 z-50">
            
            <div className="text-white text-xl gap-3 flex flex-col text-center z-50">
              <h1>Install Go</h1>
              <Button className="text-lg px-2 py-1 bg-black rounded">
                <img src="/program/go.svg" className="h-full"/>
                <h1>Download Go</h1>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                  <defs>
                    <linearGradient id="logosGoland0" x1="63.101%" x2="28.874%" y1="29.811%" y2="83.71%">
                      <stop offset="0%" stop-color="#087cfa" />
                      <stop offset="2%" stop-color="#0d7bfa" />
                      <stop offset="37%" stop-color="#5566f9" />
                      <stop offset="66%" stop-color="#8a57f8" />
                      <stop offset="88%" stop-color="#ab4ef7" />
                      <stop offset="100%" stop-color="#b74af7" />
                    </linearGradient>
                    <linearGradient id="logosGoland1" x1="49.124%" x2="74.872%" y1="38.465%" y2="4.95%">
                      <stop offset="0%" stop-color="#087cfa" />
                      <stop offset="2%" stop-color="#0d7bfa" />
                      <stop offset="37%" stop-color="#5566f9" />
                      <stop offset="66%" stop-color="#8a57f8" />
                      <stop offset="88%" stop-color="#ab4ef7" />
                      <stop offset="100%" stop-color="#b74af7" />
                    </linearGradient>
                    <linearGradient id="logosGoland2" x1="13.896%" x2="86.031%" y1="71.063%" y2="34.549%">
                      <stop offset="0%" stop-color="#087cfa" />
                      <stop offset="10%" stop-color="#1598d3" />
                      <stop offset="22%" stop-color="#23b6aa" />
                      <stop offset="35%" stop-color="#2dcc8b" />
                      <stop offset="46%" stop-color="#35dd74" />
                      <stop offset="57%" stop-color="#39e767" />
                      <stop offset="67%" stop-color="#3bea62" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#logosGoland0)" d="M225.493 99.013L256 166.667L203.787 256l-32.16-78.08z" />
                  <path fill="#b74af7" d="m171.627 177.92l32.16 78.08l-80.907-27.813z" />
                  <path fill="url(#logosGoland1)" d="M180.347 72.293L163.76 0H71.787L0 109.813l20.773 50.454L0 206.32L148.667 79.84z" />
                  <path fill="url(#logosGoland2)" d="M256 54.347L148.667 79.84L0 206.32L95.893 256l75.734-78.08z" />
                  <path d="M48 48h160v160H48z" />
                  <path fill="#fff" d="M63.013 178h60v10h-60zm-4.507-75.84v-.187A33.87 33.87 0 0 1 93.093 68a36.32 36.32 0 0 1 25.947 9.04l-9.147 11.04a24.35 24.35 0 0 0-17.253-6.747c-10.453 0-18.627 8.964-18.95 19.864l-.01.856c0 11.848 7.977 20.592 19.328 20.924l.672.01a23.12 23.12 0 0 0 13.653-3.974v-9.493H92.72V96.987h28.613v28.64a42.86 42.86 0 0 1-28.186 10.48c-20.507 0-34.64-14.427-34.64-33.947m68.96 0v-.187A34.107 34.107 0 0 1 162.64 68c20.052 0 34.535 14.737 34.95 33.107l.01 1a34.107 34.107 0 0 1-34.159 34.149l-.988-.016c-20.373-.133-34.986-15.307-34.986-34.08m54.96 0v-.187a20.027 20.027 0 0 0-19.973-20.64a19.734 19.734 0 0 0-19.8 19.65l.014.99a20.053 20.053 0 0 0 20 20.747a19.734 19.734 0 0 0 19.76-20.56" />
                </svg>
                <h1>GoLand</h1>
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
                <img src="/program/go.svg" className="h-full w-auto"/>
                <h1>Go Courses</h1>
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
      src="/go.svg"
      alt="Go"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

