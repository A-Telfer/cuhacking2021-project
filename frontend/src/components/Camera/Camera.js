import React, { Component } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import file from "../../../src/file.mp4";
import VideoPlayer from "./VideoPlayer";


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
      sources: [{
        src: this.props.file,
        type: 'application/x-mpegURL'
      }]
    }
    return (
      <div>
      <h1 style={{ position: "absolute" }}>{this.props.labname}</h1>
      <h4 style={{ float: "left", marginTop: "100px" }}>{this.props.title}</h4>
      <div style={{ position: "absolute", marginLeft: "200px", marginTop: "98px" }}>
        <ToggleButton
          selected={selected}
          toggleSelected={() => {
            this.setState({selected: !selected});
          }}
        />
      </div>
      {selected ? (
        <div className="screen" style={{}}>
          <VideoPlayer { ...videoJsOptions } />
        </div>
      ) : (
        <div></div>
      )}
    </div>
    );
  }
}

export default Camera;
