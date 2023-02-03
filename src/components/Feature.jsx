import { React, useState } from "react";

const Feature = ({ icon, title }) => {
  return (
    <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
      {/* ********* icon *********** */}
      <div className="icon bg-[#081730] rounded-2xl p-4">
        <img
          src={require(`../assets/img/${icon}.png`)}
          alt=""
          className="w-[3rem]"
        />
      </div>

      <span className="mt-5">{title}</span>

      <span className="text-[#707070] mt-4">
        Başka bir evrende En güzel halinle, Sen hayata karış Ben daha da
        biteceğim
      </span>

      <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
        Keşfet
      </span>
    </div>
  );
};

export default Feature;
