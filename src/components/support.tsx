import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Support = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <h1 className="head_text text-center pt-5 text-white w-full pb-5">
          Watch and Learn how{" "}
          <span className="usespan text-center mb-4">use Myaimix</span>
        </h1>
        <Link href={"/"}>
          <Button className="p-4 rounded-md my-3">Go to Website 🌴</Button>
        </Link>
      </div>
    </>
  );
};

export default Support;
