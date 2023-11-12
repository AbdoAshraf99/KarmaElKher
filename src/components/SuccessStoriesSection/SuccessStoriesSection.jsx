import { useState } from "react";

function SuccessStoriesSection(){

    const [successStoriesIndex,setSuccessStoriesIndex]=useState();

    const itemsList=[
        {title:"حملة اطعام اطفال مصر",desc:"هذا مثال لشرح اهداف حمله و غيره و ذلك لعرض شكل الشرح بالتفصيل",pic:"https://img.freepik.com/free-photo/side-view-smiley-kid-with-popcorn_23-2149439457.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698364800&semt=ais",actor:"احمد اسامه"},
    ];

    return <>
    <section dir="rtl" className="bg-[#f1f9f9]">

    <div className="container px-6 py-10 mx-auto z-10">
        <div className="lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src={itemsList[0].pic} alt=""/>

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
                <p className="text-5xl font-semibold text-blue-500 ">“</p>

                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl lg:w-96">
                    {itemsList[0].title}
                </h1>

                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    “ {itemsList[0].desc} ”
                </p>

                {/* <h3 className="mt-6 text-lg font-medium text-blue-500"></h3>
                <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p> */}
                <button className="bg-teal-600 rounded-xl p-3 my-4 text-white text-[15px] hover:bg-teal-500">اعرف المزيد</button>

                <div className="flex items-center justify-between mt-12 lg:justify-start">
                    <button title="left arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 lg:mx-6 hover:bg-teal-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button title="right arrow" className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 border-gray-700 lg:mx-6 hover:bg-teal-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
}

export default SuccessStoriesSection;