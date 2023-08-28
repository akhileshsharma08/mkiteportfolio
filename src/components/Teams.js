import React from 'react'
import { ContextData } from "../context/Context";
import {QRCodeSVG} from 'qrcode.react';
import {QRCodeCanvas} from 'qrcode.react';
import { Link } from 'react-router-dom';



export const Teams = () => {
  const { empData } = ContextData();

  return (
    <div>
        <h1 className='text-gray-700 font-bold  text-6xl text-center mt-6 mb-4'>Other Team Members</h1>
        {/* <h1 className='text-white text-3xl '>Visit others also</h1> */}
        <div className="teamcontainer container">
        <div className="flex justify-center items-center flex-wrap pt-12 pb-8 container">
  {empData.map((ele) => (
    <div className="w-1/4 mx-4 mb-4 bg-gray-800 p-4 rounded-lg hover:border hover:border-spacing-2 border-green-500 " key={ele.id}>
      <Link to={`http://monsterbrains.in/${ele.firstName}`}>
        <div className="box flex justify-between items-center">
            <div className="imgbox flex justify-center items-center flex-col">
        <img src={ele.avatar} width={100} height={100} alt={ele.firstName} />
        <Link to={`http://monsterbrains.in/${ele.firstName}`}><h1 className='capitalize text-white font-bold '>{ele.firstName}</h1></Link>
        </div>
        <div className="h-32 w-32 rounded-full flex justify-center items-center flex-col bg-white p-2">
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
        
        </div>
      
      
      {/* <div className="qrbox flex justify-center items-center flex-col ">
        <div className="h-12 w-12 rounded-full flex justify-center items-center flex-col bg-white p-2">
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
        <p>Show QR</p>
        <div className="nameLink w-full overflow-hidden">
        <h1 className="bg-gray-700 px-4 py-2  mx-4 mb-2 text-center capitalize">
          {ele.firstName}
        </h1>
        </div>
      </div> */}
    </Link>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}
