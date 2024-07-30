import Image from "next/image";

import Features from "~/public/images/features.png";
import Assignment from "~/public/images/assignment.png";

export default function FeaturesAssignment() {
  return (
    <section className="py-14 px-20">
      <div className="bg-[#F6F9FF] rounded-3xl py-24 px-20 max-w-[1280px] mx-auto">
        <div className="w-full flex justify-around">
          <div className="flex flex-col gap-10 max-w-[557px]">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#08182E] font-semibold text-5xl tracking-tighter">
                Features to Ease Your Your Patient Data Management
              </h1>
              <p className="text-[#5F7191] w-[95%]">
                In the admin dashboard feature, you can manage patient data
                accurately, saving time, and incorporating additional features
                for doctors as well.
              </p>
            </div>
            <button className="border border-[#D0D5DD] rounded-md overflow-hidden bg-white shadow-sm w-fit h-fit">
              <p className="font-semibold text-[#08182E] py-3 px-10">
                Book now
              </p>
            </button>
          </div>
          <Image src={Features} alt="" width={495.71} height={456} />
        </div>

        <div className="w-full flex justify-around">
          <Image src={Assignment} alt="" width={460.94} height={483.56} />
          <div className="flex flex-col gap-10 max-w-[557px]">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#08182E] font-semibold text-5xl tracking-tighter">
                Assignment to be create appointment
              </h1>
              <p className="text-[#5F7191] w-[95%]">
                Flexibility to schedule patients based on their specified
                concerns and urgency, interacting directly with doctors to
                efficiently manage appointments.
              </p>
            </div>
            <button className="border border-[#D0D5DD] rounded-md overflow-hidden bg-white shadow-sm w-fit h-fit">
              <p className="font-semibold text-[#08182E] py-3 px-10">
                Book now
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
