import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../constants/apiConstants";
import axios from "axios";
import Camera from "../Camera/Camera";

function Home(props) {
  // useEffect(() => {
  //   axios
  //     .get(API_BASE_URL + "/user/me", {
  //       headers: { token: localStorage.getItem(ACCESS_TOKEN_NAME) },
  //     })
  //     .then(function (response) {
  //       if (response.status !== 200) {
  //         redirectToLogin();
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       redirectToLogin();
  //     });
  // });
  // function redirectToLogin() {
  //   props.history.push("/login");
  // }
  return (

    <div className="container">
      <div className="row d-flex justify-content-end">
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            {/* <button type="button" class="btn btn-secondary float-right">Record</button> */}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Camera
            title="Camera 1"
            file="http://104.154.240.223:8080/stream/stream.m3u8"
          />
          <Camera
            title="Camera 2"
            file="http://104.198.214.215:8080/stream/stream.m3u8"
          />
        </div>
        <div className="col">
          <Camera
            title="Camera 3"
            file="http://104.154.240.223:8080/stream/stream.m3u8"
          />
          <Camera
            title="Camera 4"
            file="http://104.198.214.215:8080/stream/stream.m3u8"
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
