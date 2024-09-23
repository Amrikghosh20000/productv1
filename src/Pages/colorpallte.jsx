import React from "react";
import { Palettes } from "../services/colorspallte.services";
import Sidebar from "../components/sidebar";
import CustomNavbar from "../components/customNav";

function ColorPalette() {
  return (
    <>
      <Sidebar />
      <div className="centered">
        <CustomNavbar />
      </div>
      <br></br>
      <div className="grid grid-cols-3 flex-wrap justify-center gap-4 w-full overflow-x-auto ml-32">
        {Palettes.map((palette, index) => (
          <div
            key={index}
            className="flex flex-wrap justify-center mb-6 basis-1/3"
          >
            <div className="relative flex flex-wrap justify-center mb-2">
              {palette.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className={`relative flex flex-col items-center ${
                    colorIndex === 0 ? "z-20" : "z-20 -ml-5" // Reduced left margin
                  }`}
                >
                  <div
                    className="h-8 w-8 sm:h-20 sm:w-20 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                    style={{ backgroundColor: color }}
                  ></div>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-center">
                    {color}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ColorPalette;
