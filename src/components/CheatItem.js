import React from "react";

const CheatItem = ({ cheat, desc }) => {
  const jsonCheat = JSON.stringify(cheat);
  const jsonDesc = JSON.stringify(desc);

  const jsonCheatWithoutQuotes = jsonCheat.replace(/"/g, "");
  const jsonDescWithoutQuotes = jsonDesc.replace(/"/g, "");

  return (
    <div>
      <h2>{jsonCheatWithoutQuotes}</h2>
      <h4>{jsonDescWithoutQuotes}</h4>
    </div>
  );
};

export default CheatItem;
