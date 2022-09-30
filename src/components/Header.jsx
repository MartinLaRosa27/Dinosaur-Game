import React from "react";
import "../reglas.js";

export const Header = () => {
  return (
    <header>
      <div>
        Puntaje Actual<p id="scoreSpan">0</p>
      </div>
      <div>
        Mejor Puntaje<p id="hisScoreSpan">10</p>
      </div>
    </header>
  );
};
