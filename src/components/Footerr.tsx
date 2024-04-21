import React from "react";
import Image from "next/image";

const Footeer = () => {
  return (
    <div>
      <h1 className="head_text text-center pt-5 text-white">
        Hii I am {""}
        <span className="usespan text-center">Footer .</span>
      </h1>
      <div className="flex justify-center gap-3 my-4">
        <Image
          src={"/assets/images/google.svg"}
          width={30}
          height={30}
          alt="hello"
        />
        <Image
          src={"/assets/images/twitter.svg"}
          width={30}
          height={30}
          alt="hello"
        />
        <Image
          src={"/assets/images/hello.svg"}
          width={30}
          height={30}
          alt="hello"
        />
        <Image
          src={"/assets/images/pet.svg"}
          width={30}
          height={30}
          alt="hello"
        />
      </div>
    </div>
  );
};

export default Footeer;
