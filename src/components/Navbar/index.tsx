import Image from "next/image";

import DentalicaLogo from "~/public/icons/dentalica-teeth-logo.svg";
import ChevronDown from "~/public/icons/chevron-down.svg";

export default function Navbar() {
  return (
    <section className="layout w-full">
      <div className="py-7 flex justify-around items-center">
        <div className="flex items-center gap-3">
          <Image src={DentalicaLogo} alt="" width={22} height={24} />
          <p className="text-2xl text-[#08182E] font-semibold tracking-tighter">
            Dentalica
          </p>
        </div>
        <ul className="flex gap-10">
          <li className="navigation-hover transition-all">
            <p>Home</p>
          </li>
          <li className="navigation-hover transition-all flex gap-1 group relative">
            <p>Treatment</p>
            <Image
              src={ChevronDown}
              alt=""
              width={20}
              height={20}
              className="group-hover:rotate-180 transition-all group-hover:text-orange-600"
            />
          </li>
          <li className="navigation-hover transition-all">
            <p>Availability</p>
          </li>
          <li className="navigation-hover transition-all">
            <p>About us</p>
          </li>
          <li className="navigation-hover transition-all">
            <p>Contact us</p>
          </li>
        </ul>
        <button className="border border-[#E6E6E6] rounded-md overflow-hidden bg-white shadow-sm">
          <p className="font-semibold text-[#252525] py-[10px] px-7">Sign up</p>
        </button>
      </div>
    </section>
  );
}
