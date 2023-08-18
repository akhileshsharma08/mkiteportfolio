import React from "react";
import { ContextData } from "../context/Context";
import { Link } from "react-router-dom";

const List = () => {
  const { empData } = ContextData();
  return (
    <div className="bg-slate-600 text-white  flex justify-center items-center flex-wrap py-8">
      {empData.map((ele) => (
          <div className="w-1/3 ">
            <Link to={`https://mkite.vercel.app/${ele.firstName}`} key={ele.id}>
              <h1 className="bg-gray-700 px-4 py-2 mx-4 mb-2  ">
                {ele.firstName}
              </h1>
            </Link>
          </div>
      ))}
    </div>
  );
};

export default List;
