import React from "react";
import Accordian from "./Accordian";
import { useState } from "react";
import "../index.css";

const Men = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="men_page">
      Men Section
      <div className="men_section ">
        {/* this is controlled component */}
        {["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
          <Accordian
            key={index} // unique way of differentiating
            title={title}
            open={index === open ? true : false}
            setOpen={() => setOpen(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Men;
