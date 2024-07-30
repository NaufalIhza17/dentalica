import Image from "next/image";

import DentalicaLogo from "~/public/icons/dentalica-teeth-logo.svg";
import ArrowRight from "~/public/icons/ic_round-arrow-back.svg";
import InstagramIcon from "~/public/icons/instagram.svg";
import XIcon from "~/public/icons/x.svg";
import FacebookIcon from "~/public/icons/facebook.svg";
import YoutubeIcon from "~/public/icons/youtube.svg";

export default function Footer() {
  return (
    <section className="bg-[#0F1019] py-16 px-24">
      <div className="layout flex flex-col gap-16">
        <div className="flex justify-between items-start">
          <div className="text-white flex flex-col gap-7">
            <div className="flex items-center gap-3">
              <Image src={DentalicaLogo} alt="" width={27.05} height={30} />
              <p className="text-3xl font-semibold tracking-tighter">
                Dentalica
              </p>
            </div>
            <p className="max-w-[300px]">
              A platform that allows you to manage, Appointment Patient dental,
              Doctor Practice.
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Email</p>
              <div className="relative max-w-[325px] rounded bg-[#22232D]">
                <input
                  type="text"
                  className="bg-transparent py-3 px-5 w-full"
                  placeholder="Enter your email"
                />
                <button className="p-2 bg-[#1177FF] rounded absolute right-1 top-1">
                  <Image src={ArrowRight} alt="" width={24} height={24} />
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            {FooterData.map((data) => (
              <div key={data.title} className="p-7 flex flex-col gap-7">
                <p className="font-medium text-lg text-white">{data.title}</p>
                <ul className="flex flex-col gap-3">
                  {data.children.map((child) => (
                    <li key={child.text} className="font-medium text-[#767A85]">
                      {child.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-[#2B2D43] pt-10 flex justify-between text-[#767A85] font-medium">
          <p>Dentalica 2024</p>
          <div className="flex gap-16">
            <p>Privacy & Police</p>
            <p>Terms & conditions</p>
          </div>
          <div className="flex items-center gap-6">
            <Image src={FacebookIcon} alt="" width={28} height={28} />
            <Image src={XIcon} alt="" width={28} height={28} />
            <Image src={InstagramIcon} alt="" width={24} height={24} />
            <Image src={YoutubeIcon} alt="" width={28} height={28} />
          </div>
        </div>
      </div>
    </section>
  );
}

const FooterData = [
  {
    title: "Navigation",
    children: [
      {
        text: "Home",
        navigateTo: "",
      },
      {
        text: "Treatment",
        navigateTo: "",
      },
      {
        text: "Availability",
        navigateTo: "",
      },
      {
        text: "About us",
        navigateTo: "",
      },
      {
        text: "Contact us",
        navigateTo: "",
      },
    ],
  },
  {
    title: "Treatment",
    children: [
      {
        text: "Root Canal",
        navigateTo: "",
      },
      {
        text: "Dentures",
        navigateTo: "",
      },
      {
        text: "Implant",
        navigateTo: "",
      },
      {
        text: "Whitening",
        navigateTo: "",
      },
      {
        text: "Bleaching",
        navigateTo: "",
      },
    ],
  },
  {
    title: "Availability",
    children: [
      {
        text: "Appointment Patient",
        navigateTo: "",
      },
      {
        text: "Doctor",
        navigateTo: "",
      },
      {
        text: "Schedule Available",
        navigateTo: "",
      },
      {
        text: "Pricing",
        navigateTo: "",
      },
      {
        text: "Contact",
        navigateTo: "",
      },
    ],
  },
];
