const selection = [
  {
    section: "Rust vs Go",
    first: [
      "Prioritizes memory safety and performance over simplicity",
      "More challenging to learn due to its complex syntax and ownership system",
      "Manual memory management ensures zero-cost abstractions",
      "Best for high-performance systems, game engines, and embedded systems",
      "More suited for applications where fine-grained control over resources is critical"
    ],
    second: [
      "Easier to learn and use due to its simpler syntax",
      "Focuses on developer productivity with built-in tools and faster development cycles",
      "Automatic garbage collection for memory management",
      "Designed for scalability and concurrency with Goroutines and Channels",
      "Better for building web servers, APIs, and cloud-native applications"
    ]
  },
  {
    section: "Rust vs C++",
    first: [
      "Memory-safe by default without sacrificing performance",
      "Ownership system ensures safe and concurrent code",
      "Built-in modern features like pattern matching and robust error handling",
      "Slower compilation times compared to C++",
      "Growing popularity among developers for systems programming"
    ],
    second: [
      "Faster compilation times and more mature tooling",
      "Relies on manual memory management, prone to safety issues like buffer overflows",
      "Legacy language used in operating systems, game engines, and performance-critical software",
      "Offers more direct hardware access, making it ideal for embedded systems",
      "Large ecosystem with established libraries and frameworks"
    ]
  },
  {
    section: "Rust vs C",
    first: [
      "Provides memory safety through ownership and borrowing without garbage collection",
      "High-level features make development faster and less error-prone",
      "Modern standard library for efficient and safe code",
      "Stronger guarantees against data races and undefined behavior",
      "Better suited for modern systems programming and performance-critical tasks"
    ],
    second: [
      "Low-level control with minimal abstractions",
      "Prone to undefined behavior, requiring careful manual memory management",
      "Ideal for embedded systems, operating systems, and hardware programming",
      "Simple language but requires more effort to write safe and efficient code",
      "Established with decades of usage in critical systems"
    ]
  },
  {
    section: "Rust vs Java",
    first: [
      "Better for high-performance and memory-efficient applications",
      "Ownership model enforces memory safety without garbage collection",
      "More suitable for systems programming and performance-critical applications",
      "Modern syntax with robust error handling",
      "Growing community, particularly in the systems programming domain"
    ],
    second: [
      "Relies on garbage collection, which simplifies memory management but adds overhead",
      "More suited for enterprise applications and Android development",
      "Verbose syntax makes it more challenging to write concise code",
      "Well-established ecosystem with a rich set of libraries and frameworks",
      "Highly popular in enterprise and legacy systems"
    ]
  }
];

interface RustSelectionProps {
  section: string;
}

export const RustSelection: React.FC<RustSelectionProps> = ({ section }) => {
  const selected = selection.filter((s) => s.section === section);

  return (
    <div className="flex gap-4">
      <div className="bg-cyan-50 w-1/2 rounded-xl h-84 flex flex-col p-5">
        <img src="/program/rust.svg" className="size-16 ml-2" />
        <div className="p-2 text-sm">
          <ul className="px-5 py-2 list-disc">
            {selected[0]?.first?.map((s, index) => (
              <li className="pb-1" key={index} id={`item-${index}`}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-cyan-50 w-1/2 rounded-xl flex flex-col h-84 p-5">
        <img
          src={`/program/${
            selected[0].section.slice(8).toLowerCase() === "c++"
              ? "cplusplus"
              : selected[0].section.slice(8).toLowerCase()
          }.svg`}
          className="size-16 ml-2"
        />
        <div className="p-2 text-sm">
          <ul className="px-5 py-2 list-disc">
            {selected[0]?.second?.map((s, index) => (
              <li className="pb-1" key={index} id={`item-${index}`}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
