import ReasonOfHelpingSection from "./components/ReasonOfHelpingSection/ReasonOfHelpingSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection/SuccessStoriesSection";
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
        <SuccessStoriesSection/>
      </div>
    </>
  );
}

export default App;
