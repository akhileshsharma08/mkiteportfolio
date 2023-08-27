import React from "react";
import { ContextData } from "../context/Context";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png";
import QRCode from "react-qr-code";
// import { QRCode } from 'react-qrcode-logo';


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
      <div className="qrbox flex justify-center items-center flex-col">
        <QRCode
          className=""
          size={150}
          style={{ height: "50%", maxWidth: "50%", width: "50%" }}
          value={`http://monsterbrains.in/${ele.firstName}`}
          viewBox="0 0 256 256"
          
          
          
        />
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default List;
