import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center">
        <div className="relative flex justify-center items-center flex-row-reverse">
          <Image
            className="ml-3 animate-pulse"
            src={"/logo.svg"}
            width={50}
            height={50}
            alt="hello"
          />
        </div>

        <h3 className="font-bold text-2xl ml-4 hidden md:block">
          Mypagr <sup className="font-normal text-[12px]">in</sup>
        </h3>
      </Link>
    </>
  );
};

export default Logo;
