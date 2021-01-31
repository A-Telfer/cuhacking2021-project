import React, { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import file from "../../../src/file.mp4";

const Camera = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <h1 style={{ position: "absolute" }}>{props.labname}</h1>
      <h4 style={{ float: "left", marginTop: "100px" }}>{props.title}</h4>
      <div style={{ position: "absolute", marginLeft: "200px", marginTop: "98px" }}>
        <ToggleButton
          selected={selected}
          toggleSelected={() => {
            setSelected(!selected);
          }}
        />
      </div>
      {selected ? (
        <div className="screen" style={{}}>
          <video width="300" height="300" autoPlay>
            <source src={file} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Camera;
