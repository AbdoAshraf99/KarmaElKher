function NavList({ isOpen }) {
  return (
    <>
      <div
        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
          isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-5 lg:space-y-0">
          <a
            className="text-gray-700 transition-colors duration-300 transform lg:mx-6 font-bold text-xl font-serif hover:text-teal-400"
            href="#"
          >
            الرئيسية
          </a>
          <a
            className="text-gray-700 transition-colors duration-300 transform lg:mx-6 font-bold text-xl font-serif hover:text-teal-400"
            href="#"
          >
            من نحن
          </a>
          <a
            className="text-gray-700 transition-colors duration-300 transform lg:mx-6 font-bold text-xl font-serif hover:text-teal-400"
            href="#"
          >
            المشاريع
          </a>
          <a
            className="text-gray-700 transition-colors duration-300 transform lg:mx-8 font-bold text-xl font-serif  hover:text-teal-400"
            href="#"
          >
            تواصل معنا
          </a>
        </div>
        <a
          className="block px-5 py-2 mt-4 text-sm text-center border-solid border-2 border-teal-600 text-gray-700 hover:text-white capitalize bg-transparent rounded-lg lg:mt-0 hover:bg-teal-500 lg:w-auto ml-0 lg:ml-5"
          href="#"
        >
          انضم لنا
        </a>

        <a
          className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize border-solid border-2 border-teal-600 bg-teal-600 rounded-lg lg:mt-0 hover:bg-teal-500 lg:w-auto"
          href="#"
        >
          تبرع الان
        </a>
      </div>
    </>
  );
}

export default NavList;
