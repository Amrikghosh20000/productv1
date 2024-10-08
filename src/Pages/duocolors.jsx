import React from 'react';
import { duocolors } from '../services/duocolor.services';
import Sidebar from '../components/sidebar';

function Duocolors() {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full overflow-x-auto ml-24">
      
      <Sidebar/>
      {duocolors.map((palette, index) => (
        <div key={index} className="flex flex-col items-center mb-6">
          {/* Each pair of colors */}
          <div className="relative flex flex-wrap justify-center mb-4">
            {palette.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className={`relative flex flex-col items-center ${
                  colorIndex === 0 ? 'z-20' : 'z-40 -ml-6'
                }`}
              >
                <div
                  className="h-12 w-12 sm:h-28 sm:w-28 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
                  style={{ backgroundColor: color }}
                ></div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-center">{color}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Duocolors;
