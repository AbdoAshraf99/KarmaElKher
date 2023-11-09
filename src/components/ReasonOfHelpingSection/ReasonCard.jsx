function ReasonCard({ imgUrl, title, Body, url }) {
  return (
    <>
      <div className="w-full h-[360px] m-auto my-10 px-5 lg:px-0 relative group">
        <a href={url}>
          <div>
            <div
              className="w-full bg-cover h-[260px] lg:h-[360px]  lg:rounded-xl duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-70"
              style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>

            <div className="lg:absolute  w-full h-[80%] lg:top-[40%] lg:right-[10%] bg-white  shadow-sm shadow-gray-600 rounded-sm p-4">
              <h2
                dir="rtl"
                className="font-bold font-serif text-teal-800 text-xl"
              >
                {title}
              </h2>
              <p dir="rtl" className="mt-4">
                {Body}
              </p>
              <div className="lg:absolute top-[85%]">
                <a className="font-bold text-teal-800 duration-300 group-hover:text-teal-500" href="#">اقرا المزيد</a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default ReasonCard;
