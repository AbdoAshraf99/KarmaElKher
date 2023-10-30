import Social from "./Socials";
import Location from "./Location";
function SocialBar() {
  return (
    <>
      <div className=" bg-teal-600 p-2">
        <div className="flex flex-row justify-between m-auto items-center max-w-7xl">
          <Social />
          <div>
            <h3 className="font-bold text-white font-sans hidden md:block">
              مؤسسة كارما الخيريه
            </h3>
          </div>
          <Location />
        </div>
      </div>
    </>
  );
}

export default SocialBar;
