const selection = [
  {
    section: "Go vs Python",
    first: [
      "Faster, because Go is a compiled language",
      "Simple syntax makes it easy to learn",
      "Best for backend development, cloud systems, distributed computing, and command-line tools",
      "A smaller ecosystem focused on backend and cloud tools",
      "Growing community, especially among cloud and backend developers."
    ],
    second: [
      "Slower, because Python is an interpreted language",
      "Even simpler syntax, seen as one of the easiest languages to learn",
      "Perfect for data analysis, machine learning, web development, and scripting",
      "A massive ecosystem with libraries for almost everything, from web development to AI and scientific computing",
      "One of the largest and most diverse programming communities globally."
    ]
  },
  {
    section: "Go vs Java",
    first: [
      "Faster to compile and run due to simplicity and being lightweight",
      "Easier to learn and use due to its minimalistic design",
      "Perfect for modern cloud-native applications, microservices, and scalable systems",
      "Smaller ecosystem but very focused on backend and cloud tools",
      "Better for rapid development of scalable services"
    ],
    second: [
      "Slower to compile and run due to its complexity and verbose nature",
      "More challenging to learn because of its detailed syntax and extensive feature set",
      "Widely used for enterprise applications, large systems, and Android development",
      "Huge ecosystem with libraries, frameworks, and tools for almost every use case",
      "Highly established with a vast global community and legacy systems"
    ]
  },
  {
    section: "Go vs C#",
    first: [
      "Simpler and faster for developing lightweight, scalable backend systems",
      "Designed for cloud and microservices architecture",
      "Offers built-in concurrency support (Goroutines and Channels)",
      "Minimalist language, making it easier to read and maintain",
      "Less reliant on frameworks, focusing more on native solutions"
    ],
    second: [
      "Richer feature set, making it more suitable for building large applications",
      "Well-suited for game development (via Unity) and enterprise desktop applications",
      "Concurrency is supported, but more complex to use compared to Go",
      "More verbose, requiring developers to write additional boilerplate code",
      "Relies heavily on the .NET ecosystem and its rich tooling support"
    ]
  },
  {
    section: "Go vs Rust",
    first: [
      "Easier to learn and use due to its simpler syntax",
      "Focuses on developer productivity with built-in tools and faster development cycles",
      "Automatic garbage collection for memory management",
      "Designed for scalability and concurrency with Goroutines and Channels",
      "Better for building web servers, APIs, and cloud-native applications"
    ],
    second: [
      "More challenging to learn due to its complex syntax and ownership system",
      "Prioritizes memory safety and performance over simplicity",
      "Manual memory management ensures zero-cost abstractions",
      "Best for high-performance systems, game engines, and embedded systems",
      "More suited for applications where fine-grained control over resources is critical"
    ]
  }
];


interface GoSelectionProps {
  section: string;
}

export const GoSelection:React.FC<GoSelectionProps> = ({section}) => {
  const selected = selection.filter(s => s.section === section); 

  return(
    <div className="flex md:flex-row flex-col gap-2 md:gap-4 pb-2">
      <div className='bg-cyan-50 w-full md:w-1/2 rounded-xl h-auto md:h-84 flex flex-col p-5'>
        <img src="/program/go.svg" className='size-10 md:size-16'/>
        <div className='p-1 text-xs md:text-sm'>
          <ul className="px-2 md:px-5 py-1 md:py-2 list-disc">
          {selected[0]?.first?.map((s, index) => (
            <li className="pb-1" key={index} id={`item-${index}`}>{s}</li>
          ))}
          </ul>
        </div>
      </div>
      <div className='bg-cyan-50 w-full hidden md:flex md:w-1/2 rounded-xl  flex-col h-84 p-5'>
        <img src={`/program/${selected[0].section.slice(6).toLowerCase() === "c#" ? "csharp" : selected[0].section.slice(6).toLowerCase()}.svg`}  className='size-16'/>
        <div className='p-2 text-sm'>
          <ul className="px-5 py-2 list-disc">
        {selected[0]?.second?.map((s, index) => (
          <li className="pb-1" key={index} id={`item-${index}`}>{s}</li>
        ))}
          </ul>
        </div>
      </div>
    </div>
  )
}