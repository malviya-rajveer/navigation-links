import Image from "next/image";
import { ShutterText } from "../component/Shutterlink";
import { Hoverlink } from "../component/Hoverlink";

export default function Home() {
  return (
    <div className="font-inter relative flex min-h-screen flex-1 flex-col items-center bg-zinc-50 dark:bg-black">
      <div className="z-30 flex min-h-screen w-full flex-col justify-center px-5 md:px-0">
        <ShutterText title="Web design" />
        <ShutterText title="Next js" />
        <ShutterText title="Design Engineer" />
        <ShutterText title="Web design" />
      </div>
      <div className="flex min-h-screen w-full flex-col justify-center gap-1 px-5 md:px-0">
        <Hoverlink title="Web design" />
        <Hoverlink title="Next js" />
        <Hoverlink title="Design Engineer" />
        <Hoverlink title="Web design" />
      </div>
      <Image
        src={"/4.jpg"}
        alt=""
        width={100000}
        height={100000}
        className="fixed inset-0 top-0 h-full w-full object-cover"
      />
    </div>
  );
}
