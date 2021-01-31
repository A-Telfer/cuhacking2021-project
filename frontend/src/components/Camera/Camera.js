import React, { Component } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import file from "../../../src/file.mp4";
import VideoPlayer from "./VideoPlayer.js";

let startStop = isStart => fetch(`http://104.198.214.215:5000/${isStart ? 'start_sensor' : 'stop_sensor'}`)
  .then(response => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(data => console.log(data));
    }
  )
  .catch(err => console.log('Fetch Error :-S', err));

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
                startStop(!selected);
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
