import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className="flex items-center" prefetch={true}>
        <div className="relative flex justify-center w-10 h-10  items-center flex-row-reverse">
          <Image
            className="ml-3 animate-pulse"
            src={"/logo.svg"}
            fill
            alt="hello"
          />
        </div>

        <h3 className="font-bold text-2xl ml-4 hidden md:block">
          Myaimix <sup className="font-normal text-[12px]">in</sup>
        </h3>
      </Link>
    </>
  );
};

export default Logo;
