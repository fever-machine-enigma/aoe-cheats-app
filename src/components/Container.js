import React from "react";
import NavBtn from "./NavBtn";

const Container = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <NavBtn buttonText="aoe-1" reqType={reqType} setReqType={setReqType} />
      <NavBtn buttonText="aoe-2" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

export default Container;
