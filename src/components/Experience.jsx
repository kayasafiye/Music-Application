import React from "react";
import Feature from "./Feature";

const Experience = () => {
  return (
    <div className="experince flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* ******** title icon ********* */}
      <img
        src={require("../assets/img/Path 318.png")}
        alt=""
        className="w-[5rem]"
      />
      {/* ********** heading ********** */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Günlük hayatına bu harika uygulama ile renk kat.</span>
        <span>
          <b>Müzik Deneyimi</b>
        </span>
      </div>
      {/* ************** Features ****************** */}
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="Group 2" title="Canlı Müzik" />
        <Feature icon="music icon" title="En çok dinlenen Müzik" />
        <Feature icon="Group 4" title="Sanatçılar" />
      </div>
    </div>
  );
};

export default Experience;
