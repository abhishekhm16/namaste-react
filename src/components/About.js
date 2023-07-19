import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(prop) {
    super(prop);
    console.log("parent constuctor");
  }

  componentDidMount() {
    console.log("parent Mount");
  }

  componentWillUnmount() {
    console.log("unmouted");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        {/* <User name={"abhishek"} location={"dvg"} contact={"007"} /> */}
        {/* <UserClass name={"hangomdiath"} location={"london"} contact={"007"} /> */}
        {/* <UserClass name={"han"} location={"US"} contact={"007"} /> */}
        <UserClass />
      </div>
    );
  }
}

// function About() {
//   return (
//     <div>
//       <User name={"abhishek"} location={"dvg"} contact={"007"} />
//       <UserClass name={"hangomdiath"} location={"london"} contact={"007"} />
//     </div>
//   );
// }

export default About;
