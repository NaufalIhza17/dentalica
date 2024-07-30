import Image from "next/image";

import Sisyphus from "~/public/images/sisyphus.png";
import Circooles from "~/public/images/circooles.png";
import Quotient from "~/public/images/quotient.png";
import Hourglass from "~/public/images/hourglass.png";
import CommandR from "~/public/images/commandr.png";
import Catalog from "~/public/images/catalog.png";
import Layers from "~/public/images/layers.png";
import AppointmentImg from "~/public/images/appointment.png";
import Disc from "~/public/images/disc-2.png";

export default function Appointment() {
  return (
    <section className="py-28 flex flex-col justify-center items-center gap-28">
      <div className="flex flex-col gap-9">
        <div className="flex gap-12 justify-center items-center">
          <Image src={Sisyphus} alt="" width={153.83} height={43} />
          <Image src={Circooles} alt="" width={166.57} height={43} />
          <Image src={Quotient} alt="" width={170.21} height={43} />
          <Image src={Hourglass} alt="" width={176.58} height={43} />
          <Image src={CommandR} alt="" width={196.61} height={43} />
        </div>
        <div className="flex gap-12 justify-center items-center">
          <Image src={Catalog} alt="" width={145.63} height={43} />
          <Image src={Layers} alt="" width={132.89} height={43} />
          <Image src={Circooles} alt="" width={166.57} height={43} />
        </div>
      </div>
      <div className="relative grid gap-20">
        <div className="relative z-10 grid mx-auto gap-5 text-center max-w-[820px]">
          <h1 className="font-semibold text-5xl text-[#08182E] tracking-tighter">
            Easily Appointment with patient
          </h1>
          <p className="text-[#767A85]">
            An efficient dental appointment is one that is well-organized,
            minimizes waiting times, and ensures effective communication between
            the dental team and the patient.
          </p>
        </div>
        <Image
          src={AppointmentImg}
          alt=""
          width={1006}
          height={593}
          className="relative z-10"
        />
        <Image
          src={Disc}
          alt=""
          width={750}
          height={750}
          className="absolute top-14 left-1/2 transform -translate-x-1/2 z-0"
        />
      </div>
    </section>
  );
}
