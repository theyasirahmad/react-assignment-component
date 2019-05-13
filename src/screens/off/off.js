import React, { Component } from 'react';
import '../../App.css';


class Off extends Component {


  constructor(props) {
    super(props);
    this.state = {
      offImage: "https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg",
    }

    this.run = this.run.bind(this);
  }

  run() {
    const { offImage } = this.state;
    this.props.updateState(offImage);
  }

  render() {

    

    return (
      
      <button className="btn btn-info" onClick={this.run} >OFF </button>
    );
  }
}
export default Off ;
