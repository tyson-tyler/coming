import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Support = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <h1 className="head_text text-center pt-5  w-full pb-5">
          <span className="dark:text-white text-black">
            {" "}
            Watch and Learn how{" "}
          </span>
          <span className="usespan text-center mb-4">use Myaimix</span>
        </h1>
        <video src="" className="w-full h-[300px] lg:h-[500px]" controls />
        <Link href={"/"} className="mb-32" prefetch={true}>
          <Button className="p-4 rounded-md my-3">Go to Website 🌴</Button>
        </Link>
      </div>
    </>
  );
};

export default Support;
