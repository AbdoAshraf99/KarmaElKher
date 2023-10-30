//import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
function Location() {
  return (
    <>
      <div dir="rtl" className="flex flex-row justify-center items-center">
        <FaLocationDot className="text-white h-5 w-5 pl-2" />
        <p className="text-white font-sans">الشارع - الحي - المنوفية</p>
      </div>
    </>
  );
}

export default Location;
