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
      <WavyBackground speed="fast" colors={["#11e880","#0040f9","#0080f9","#00f9de","#1ca495"]}>
        <NavbarDemo/>
        <div className="text-white w-full font-geo mt-[24rem] pl-20">
          <h1 className="text-9xl mb-2 text-blue-800 font-roboto ">Typescript</h1>
          <p className="text-2xl ml-2 text-blue-600">2024 Most Popular Language</p>
        </div>
      </WavyBackground>
      <StickyScroll content={[sectOne, sectTwo, sectOne]} />
    </>
  )
}

export default App;