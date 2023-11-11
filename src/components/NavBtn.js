import React from "react";

const NavBtn = ({ buttonText, reqType, setReqType }) => {
  return (
    <div>
      <button
        className={buttonText === reqType ? "selected" : null}
        type="button"
        onClick={() => setReqType(buttonText)}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default NavBtn;
