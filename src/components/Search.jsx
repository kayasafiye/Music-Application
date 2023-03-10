import { React, useState } from "react";
import MusicPlayer from "./MusicPlayer";
function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left flex-1">
        <img
          src={require("../assets/img/backgraphics.png")}
          alt=""
          className="top-[18rem] left-[-35rem]"
        />
        <img
          src={require("../assets/img/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />{" "}
        <img
          src={require("../assets/img/d2.png")}
          alt=""
          className="w-[9rem] absolute top-[32.7rem] left-[7rem]"
        />{" "}
        <img
          src={require("../assets/img/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] left-[17rem] absolute"
        />
        <img
          src={require("../assets/img/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] left-[2rem] absolute"
        />
      </div>
      {/* right side */}
      <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem]">
        {/* Search */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="İstediğin şarkıyı yaz..."
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* SearchIcon */}
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem]">
            <img
              src={require("../assets/img/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../assets/img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Müzik Ara</span>
          <span>
            <b>Müzik adı ya da URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        {/* Music Player */}

        <MusicPlayer />
      </div>
    </div>
  );
}

export default Search;
