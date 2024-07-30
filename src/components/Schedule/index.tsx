import Image from "next/image";

import ScheduleImg from "~/public/images/schedule.png";
import Grid from "~/public/images/grid2-background.svg";

export default function Schedule() {
  return (
    <section className="py-14 px-7">
      <div className="relative rounded-2xl bg-[#0F1019] max-w-[1384px] max-h-[935px] mx-auto pt-32 flex flex-col gap-12">
        <div className="flex items-center justify-between mx-auto max-w-[1092px] w-full relative z-20">
          <div className="max-w-[695px] flex flex-col gap-6">
            <h1 className="text-white text-5xl font-semibold tracking-tighter">
              Easily Managing Schedule Doctor to Assigned
            </h1>
            <p className="text-[#767A85]">
              Can make you Managing schedule doctor to easily assigning doctor
              to be treatment patient.
            </p>
          </div>
          <button className="rounded-md overflow-hidden bg-[#1177FF] shadow-2xl shadow-[#1177FF]/10 h-fit">
            <p className="font-semibold text-white py-[14px] px-6 ">
              Reserve Now
            </p>
          </button>
        </div>
        <Image
          src={ScheduleImg}
          alt=""
          width={1096}
          height={779.38}
          className="mx-auto relative z-20"
        />
        <Image
          src={Grid}
          alt=""
          width={2000}
          height={1000}
          className="absolute z-10"
        />
      </div>
    </section>
  );
}
