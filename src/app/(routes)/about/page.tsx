import GallerySection from "@/components/GallerySection";
import Feature from "@/components/Feature";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "About",
  },
};

const About = () => {
  return (
    <>
      <section className="w-full flex-center flex-col mt-6">
        <h1 className="head_text text-center pt-[200px] dark:text-white text-black">
          <span className="dark:text-white text-black">Brower & Create</span>
          <br className="max-md:hidden" />
          <span className="usespan text-center">Ai Prompts .</span>
        </h1>
        <p className="desc text-center text-gray-600 mt-5">
          Mypager is an open-source AI prompting tools for the Idea for your
          project and get Solve your Problem .
        </p>
        <GallerySection />
        <Feature />
      </section>
    </>
  );
};

export default About;
