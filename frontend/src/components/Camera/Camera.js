import React, { Component } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import file from "../../../src/file.mp4";
import VideoPlayer from "./VideoPlayer.js";

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    let selected = this.state.selected;
    const videoJsOptions = {
      autoplay: true,
      // controls: true,
      sources: [
        {
          src: this.props.file,
          type: "application/x-mpegURL",
        },
      ],
    };
    return (
      <div style={{margin: '10px'}}>
        <div className="card" style={{ width: "31rem" }}>
          <div className="card-body">
            <h1 className="card-title">{this.props.labname}</h1>
            <br />
            <h4 className="card-text float-left">{this.props.title}</h4>
          </div>
          <div style={{ position: "absolute", top: "103px", right: "20px" }}>
            <ToggleButton
              selected={selected}
              toggleSelected={() => {
                this.setState({ selected: !selected });
              }}
            />
          </div>
          {selected ? (
            <div>
              <VideoPlayer {...videoJsOptions} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}

export default Camera;
