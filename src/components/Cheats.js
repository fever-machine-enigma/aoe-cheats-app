import React from "react";
import CheatItem from "./CheatItem";

const Cheats = ({ newPage }) => {
  return (
    <h3>
      {newPage.map((cheat) => (
        <CheatItem key={cheat.id} cheat={cheat.cheat} desc={cheat.desc} />
      ))}
    </h3>
  );
};

export default Cheats;
