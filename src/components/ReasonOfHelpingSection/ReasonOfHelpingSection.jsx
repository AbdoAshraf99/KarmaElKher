import ReasonCard from "./ReasonCard";

function ReasonOfHelpingSection() {
  return (
    <>
      <div className="  lg:h-[690px] w-full  bg-teal-600 bg-cover bg-opacity-5 p-4">
        <div dir="rtl">
          <h1 className="text-5xl text-gray-700 font-bold font-serif mt-10 items-center m-auto flex flex-row justify-center">
            المشاريع
          </h1>
          <div className=" w-[160px] h-[5px] mt-1  m-auto">
            <div className="bg-teal-500 w-[60px]  h-[5px] rounded-sm"></div>
          </div>
        </div>
        <div className="flex flex-col space-y-20 lg:space-y-9 lg:flex-row justify-center m-auto lg:space-x-20 w-[90%] max-w-5xl lg:max-w-5xl ">
          <ReasonCard
            imgUrl="https://themewagon.github.io/charifit/img/help/3.png"
            title="مشاريع ذوي الهمم"
            Body="مؤسسة كرما الخيرية تهتم بذوي الهمم لذلك قمنا باقامة العديد من المشاريع لرعاية و مساعدة ذوي الهمم"
            url="#"
          />
          <ReasonCard
            imgUrl="https://themewagon.github.io/charifit/img/help/2.png"
            title="رعاية ايتام"
            Body="التكفل بالمصاريف المعيشية لاحد الايتام"
            url="#"
          />
          <ReasonCard
            imgUrl="https://themewagon.github.io/charifit/img/help/1.png"
            title="تكفل مصاريف"
            Body="تكفل بالمصاريف الدراسيه لطفل واحد او اكثر من طفل من خلال مؤسسة مرما الخيرية"
            url="#"
          />
        </div>
        <div
          dir
          className=" flex flex-row justify-center  duration-300 w-[100%] m-auto my-20  text-teal-700 font-bold hover:text-teal-500"
        >
          <a href="#">
            <h2>.. الـمـزيـد</h2>
          </a>
        </div>
      </div>
    </>
  );
}

export default ReasonOfHelpingSection;
