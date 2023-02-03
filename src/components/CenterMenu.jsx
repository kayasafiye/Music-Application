import React from "react";

function CenterMenu() {
  const liStyle = "mr-[3rem] hover:cursor-pointer";

  return (
    <div className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <li className={liStyle}>Anasayfa</li>
        <li className={liStyle}>Hakkımızda</li>
        <li className={liStyle}>Sanatçılar</li>
        <li className={liStyle}>Etkinlik Programı</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
