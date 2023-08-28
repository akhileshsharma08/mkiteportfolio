import React from "react";
import { ContextData } from "../context/Context";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import QRCode from "react-qr-code";
// import { QRCode } from 'react-qrcode-logo';
import {QRCodeSVG} from 'qrcode.react';
import {QRCodeCanvas} from 'qrcode.react';


const List = () => {
  const { empData } = ContextData();
  console.log(empData,"empdata")
  return (
    <div className="maindiv bg-slate-600 text-white flex justify-center items-center flex-col ">
      <div className="mainlogo pt-20">
        <img src={Logo} alt="monsterbrains logo" width={300} height={100} />
      </div>
   <div className="flex justify-center items-center flex-wrap pt-12 pb-8 container">
  {empData.map((ele) => (
    <div className="w-1/4 mx-4 mb-4 bg-gray-500 p-4 rounded-lg" key={ele.id}>
      <Link to={`http://monsterbrains.in/${ele.firstName}`}>
        <h1 className="bg-gray-700 px-4 py-2 mx-4 mb-2 text-center capitalize">
          {ele.firstName}
        </h1>
      </Link>
      <div className="qrbox flex justify-center items-center flex-col ">
        <div className="h-40 w-40 rounded-full flex justify-center items-center flex-col bg-white p-2">
           <QRCodeSVG
          className=""
          // size={200}
          // style={{ height: "70%", maxWidth: "70%", width: "70%" }}
          value={`http://monsterbrains.in/${ele.firstName}`}
          // viewBox="0 0 256 256"
          size={128}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"L"}
          includeMargin={false}
          imageSettings={{
            src: `http://monsterbrains.in/${ele.avatar}`,
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
          
          
        />
        </div>
        <p>scan to visit profile</p>
       
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default List;
