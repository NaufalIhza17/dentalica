import Image from "next/image";

import Grid from "~/public/images/grid-background.svg";
import Disc from "~/public/images/disc.png";
import Calender from "~/public/images/calender.png";

export default function Hero() {
  return (
    <section className="relative max-h-[980px] overflow-hidden">
      <Image
        src={Grid}
        alt=""
        width={2000}
        height={1000}
        className="absolute"
      />
      <div className="relative top-20">
        <div className="relative z-20 flex flex-col items-center gap-8 pt-[76px]">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="max-w-[836px] font-semibold text-7xl text-[#1F2026] tracking-tighter">
              Optimize, Organize and Excel in 🦷 Dentistry
            </h1>
            <p className="max-w-[560px] font-medium text-[#767A85]">
              By using this app, you can optimize a system in your dental clinic
              to be more efficient, accurate, and user-friendly for both doctors
              and patients.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="border border-[#E6E6E6] rounded-md overflow-hidden bg-white shadow-sm">
              <p className="font-semibold text-[#252525] py-[14px] px-7">
                Sign in
              </p>
            </button>
            <button className="rounded-md overflow-hidden bg-[#1177FF] shadow-2xl shadow-[#1177FF]/10">
              <p className="font-semibold text-white py-[14px] px-7">
                Reserve Now
              </p>
            </button>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col gap-1 text-center py-[6px] px-6">
              <h3 className="text-2xl font-semibold text-[#1F2026]">200+</h3>
              <p className="text-xs font-semibold text-[#767A85]">
                Amount of patient
              </p>
            </div>
            <div className="flex flex-col gap-1 text-center py-[6px] px-6">
              <h3 className="text-2xl font-semibold text-[#1F2026]">199+</h3>
              <p className="text-xs font-semibold text-[#767A85]">
                Smilling Patient
              </p>
            </div>
          </div>
        </div>
        <Image
          src={Disc}
          alt=""
          width={900}
          height={900}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
        />
      </div>
      <Image
        src={Calender}
        alt=""
        width={1144}
        height={574}
        className="relative z-20 left-1/2 top-20 transform -translate-x-1/2"
      />
      <div className="absolute bottom-0 z-30 w-full h-24 bg-gradient-to-b from-white/0 to-white" />
    </section>
  );
}
