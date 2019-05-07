import React, { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">
          Please allow to use your location...
        </div>
      </div>
    );
  }
}

export default Spinner;
