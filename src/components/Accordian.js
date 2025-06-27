import React from "react";
import "../index.css";
import AccordianList from "./AccordianList";
import { useState } from "react";

const Accordian = ({ title, open, setOpen }) => {
  const enable = () => {
    setOpen(!open);
  };

  return (
    <div className="accordian_page">
      <div className="men_section_box">
        <div className="men_left_box">
          <span>{title}</span>
        </div>
        <div>
          <button className="men_right_box" onClick={enable}>
            {/* {open ? 'close' : 'show'} */} show
          </button>
        </div>
      </div>
      {open && <AccordianList />}
    </div>
  );
};

export default Accordian;
