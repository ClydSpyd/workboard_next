import Image from "next/image";
import Link from "next/link";


export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-1 flex cursor-pointer">
        <Image src={"/logo.svg"} height={30} width={30} alt="logo" />
        <p className={`text-lg text-orange-500 relative top-[2px] font-carlsans`}>Taskify</p>
      </div>
    </Link>
  );
};
