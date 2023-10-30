import logo from "../../assets/logo.jpg";
function LogoSection() {
  return (
    <>
      <div
        dir="rtl"
        className="flex flex-row space-x-2 justify-between items-center"
      >
        <img src={logo} className="w-30 h-20" />
        <div className="flex flex-col">
          <a href="">
            <h2 className="text-[12px] md:text-xl font-sans font-bold hover:text-teal-600">
              مـؤســســة كــارمــا الــخيــريــة
            </h2>
          </a>
          <h4 className="text-gray-600 text-[10px] sm:text-[16px]">
            KARMA AL-KHAR FOUNDATION
          </h4>
        </div>
      </div>
    </>
  );
}

export default LogoSection;
