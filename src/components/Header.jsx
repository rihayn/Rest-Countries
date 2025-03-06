import React from "react";
import Filter from "./filter";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm justify-between ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">countries</a>
        </div>
        <Filter />
      </div>
    </>
  );
};

export default Header;
