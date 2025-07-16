import React from "react";
import { useRef } from "react";

const Ref = () => {
  const reference = useRef();

  const handleFocus = ()=>{
    reference.current.style.border = '5px solid blue'
    reference.current.style.outline = 'none'
  }
  return (
    <div>
      <input type="text" placeholder="Enter name here" ref={reference} onFocus={handleFocus} />
    </div>
  );
};

export default Ref;
