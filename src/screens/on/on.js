import React, { Component } from 'react';
import '../../App.css';


class On extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onImage: "https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn",
    }

    this.run = this.run.bind(this);
  }

  run() {
    const { onImage } = this.state;
    this.props.updateState(onImage);
  }



  render() {
    return (
      
      <button className="btn btn-info" onClick={this.run} >ON</button>
    );
  }
}

export default On;
