import React from "react";

const UserData = (props) => {
  return (
    <div className="">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
           <h1>  <span>{props.id} </span> </h1>
          <span className="font-bold text-xl mb-2">{props.name}</span>
          <h3 className="text-gray-600 text-base">{props.email}</h3>
          <p className="text-gray-700 text-base">
            {props.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
