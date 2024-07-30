import Image from "next/image";

import Grid from "~/public/images/grid3-background.svg";
import Phones from "~/public/images/phones.png";
import Disc from "~/public/images/disc-2.png";

export default function MedicalRecord() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center gap-20">
      <Image
        src={Grid}
        alt=""
        width={2000}
        height={1000}
        className="absolute"
      />
      <div className="pt-20 relative z-20 grid mx-auto gap-5 text-center max-w-[820px]">
        <h1 className="font-semibold text-5xl text-[#08182E] tracking-tighter">
          Responsive Detail Medical Record
        </h1>
        <p className="text-[#767A85]">
          An efficient dental appointment is one that is well-organized,
          minimizes waiting times, and ensures effective communication between
          the dental team and the patient.
        </p>
      </div>
      <Image src={Phones} alt="" width={809} height={706.19} className="relative z-20" />
      <Image src={Disc} alt="" width={750} height={750} className="absolute top-52 left-1/2 transform -translate-x-1/2 z-0" />
      <div className="h-[236px] w-full absolute z-30 bottom-0 bg-gradient-to-t from-white from-55% to-transparent"></div>
    </section>
  );
}
