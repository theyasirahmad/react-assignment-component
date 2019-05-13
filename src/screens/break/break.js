import React, { Component } from 'react';
import '../../App.css';

class Break extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakImage: "https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736",
    }

    this.run = this.run.bind(this);
  }

  run() {
    const { breakImage } = this.state;
    this.props.updateState(breakImage);
  }


  render() {
    return (
      <button className="btn btn-info" onClick={this.run}>break</button>
    );
  }
}

export default Break;
