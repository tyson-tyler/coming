import React from "react";
import BoxCard from "./Box";
import Support from "./support";

const Feature = () => {
  return (
    <div className="h-[50vh]">
      <h1 className="head_text text-center pt-5 text-white w-full">
        <span className="dark:text-white text-black">Our Features </span>
        <span className="usespan text-center mb-4">in MyPager.</span>
      </h1>
      <div className="flex justify-center items-center min-h-screen flex-wrap">
        <BoxCard
          imageUrl="https://media3.giphy.com/media/duNowzaVje6Di3hnOu/200.webp?cid=790b7611j28eukue0d3194ul6490nd05s7c4br2knprx79i7&ep=v1_gifs_trending&rid=200.webp&ct=g"
          heading="Use for the Commercial"
          description="you can use any of the freely and open at any social media platform use for your bussiness & freelance project and commercial projects"
        />
        <BoxCard
          imageUrl="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnYxMHV2aXFxM25neW1icmFqaXV3ZjVodTh3NDdtMW8zOGhhN3llcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WOb8EeFziTQNE02WXs/200.webp"
          heading="Use the Unlimited Power of Ai"
          description="You can use the ai power image generated image and video at your project using in the and you can get the best project of Ai for free"
        />
        <BoxCard
          imageUrl="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmR2MHMzcXY3aXRtMXo0ZjIwa3ltYWFwMXcxcXIybzNlYzByNzR5OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2QZX6kZfXNZnzptu/giphy.gif"
          heading="Don't feel alone"
          description="If you want something more in your project you can visit to the community. you have the backsupport for us it member and daily users."
        />
      </div>
      <Support />
    </div>
  );
};

export default Feature;
