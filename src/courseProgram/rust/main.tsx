import { WavyBackground } from "../../components/aceternity/wavybg";
import { NavbarDemo } from "../../components/aceternity/navbar";
import { StickyScroll } from "../../components/aceternity/scrollSection";

const sectionOne = () => {
  return(
    <div className="bg-black">
      <h1>Hi Noobs</h1>
    </div>
  );
}

const sectOne = {
  title: "One",
  description: "None",
  content: sectionOne
}

const sectTwo = {
  title: "Two",
  description: "None",
  content: sectionOne
}

const App = () => {
  return(
    <>
      <WavyBackground speed="fast" colors={["#e0e719","#ec421d","#c21515","#f97303","#640707"]}>
        <NavbarDemo/>
        <div className="text-white w-full font-geo mt-[24rem] pl-20">
          <h1 className="text-9xl ml-2 text-orange-600 font-roboto ">Rust</h1>
          <p className="text-2xl mb-2 text-amber-800">Safety, Speed, and Concurrency</p>
        </div>
      </WavyBackground>
      <StickyScroll content={[sectOne, sectTwo]} />
    </>
  )
}

export default App;