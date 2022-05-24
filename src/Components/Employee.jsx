import React, { Component } from "react";
import './Styles.css';
// import Feedback from "./Feedback";
import Return from "./Return";

class Employee extends Component {
  state = {
    name: "",
    department: "",
    rating: "",
    arr: [],
    showEmployee: true,
    showReturn: false,
  };
  OnSubmit(e) {
    e.preventDefault();
    const tempObj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    this.state.arr.push(tempObj);
    this.setState({
      name: "",
      department: "",
      rating: "",
      showEmployee: false,
      showReturn: true,
    });
  }

  handlestateChange = (e) => {
    this.setState({
      showEmployee: true,
      showReturn: false,
    });
  };

  render() {
    return (
      <>
        {this.state.showEmployee && (
          <div className="container">
            <h1 style={{ padding: 25 }}>Employee Feedback Form</h1>
            <form>
              <label for="ipt1">Name : </label>
              <input
                type="text"
                id="ipt1"
                value={this.state.name}
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
              ></input>
              <br></br>
              <label for="ipt2">Department: </label>
              <input
                type="text"
                id="ipt2"
                value={this.state.department}
                onChange={(event) => {
                  this.setState({ department: event.target.value });
                }}
              ></input>
              <br></br>
              <label for="ipt3">Rating : </label>
              <input
                type="number"
                id="ipt3"
                value={this.state.rating}
                onChange={(event) => {
                  this.setState({ rating: event.target.value });
                }}
              ></input>
              <br></br>
            </form>
            <button type="submit" onClick={this.OnSubmit.bind(this)}>
              SUBMIT
            </button>
          </div>
        )}
        {this.state.showReturn && (
          <Return
            data={this.state.arr}
            stateobj={this.state}
            statechange={this.handlestateChange}
          />
        )}
      </>
    );
  }
}

export default Employee;
