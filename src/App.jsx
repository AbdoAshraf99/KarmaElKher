import ReasonOfHelpingSection from "./components/ReasonOfHelpingSection/ReasonOfHelpingSection";
import SocialBar from "./components/header/SocialBar";
import NavBar from "./components/nav/NavBar";
import SlideShow from "./components/slideshow/SlideShow";

function App() {
  return (
    <>
      <div className="max-w-full m-auto">
        <SocialBar />
        <NavBar />
        <SlideShow />
        <ReasonOfHelpingSection />
      </div>
    </>
  );
}

export default App;
