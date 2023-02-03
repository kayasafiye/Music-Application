import React from "react";
import CenterMenu from "./CenterMenu";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div
      className="footer footer flex flex-col items-center justify-start px-[5rem] bg-[#081730]
    h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]"
    >
      <CenterMenu />
      {/* ****Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle}>
          <BsFacebook />
        </div>{" "}
        <div className={SocialStyle}>
          <AiFillTwitterCircle />
        </div>{" "}
        <div className={SocialStyle}>
          <BsYoutube />
        </div>{" "}
        <div className={SocialStyle}>
          <BsLinkedin />
        </div>
      </div>
      {/* ****** detail ******** */}
      <div className="details">
        <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[15rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          repellendus accusantium vitae tempora.
        </span>
      </div>
    </div>
  );
};

export default Footer;
