import { React} from "react";
import DownloadAds from "./DownloadAds";

const Hero = () => {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
      {/* *********left side *********  */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
        <span>Deneyimle</span>{" "}
        <span>
          <b>Kaliteli Müzik</b>
        </span>
        <span className="text-[15px] text-[#525D6E]">
          Omzumda iz bırakma, yüküm dünyaya yakın
          <br />
          Elfida, hep aklımda kalacaksın
        </span>
        {/********* download ads *********/}
        <div>
          <span className="text-[13px]">
            IOS ve Android telefonlara indirebilirsin.
          </span>
          <DownloadAds />
        </div>
      </div>

      {/* *********right side *********  */}
      <div className="images relative w-[50%]">
        <img
          src={require("../assets/img/backgraphics.png")}
          alt=""
          className="absolute top-[-8rem] left-[19rem]"
        />

        <img
          src={require("../assets/img/p 1.png")}
          alt=""
          className="absolute top-[-15rem] h-[34rem] left-[13rem]"
        />

        <img
          src={require("../assets/img/p 2.png")}
          alt=""
          className="absolute left-[235px] top-[94px] w-[175px]"
        />

        <img
          src={require("../assets/img/p 3.png")}
          alt=""
          className="absolute w-[5rem] left-[13rem] top-[12rem]"
        />

        <img
          src={require("../assets/img/p 4.png")}
          alt=""
          className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
