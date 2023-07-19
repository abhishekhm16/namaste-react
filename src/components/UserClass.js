import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //inside constructor
    this.state = {
      // count: 0,
      userInfo: {
        name: "dummmy",
        location: "dummy",
        bio: "dummy",
      },
    };
    console.log("child constuctor");
  }
  async componentDidMount() {
    // console.log("child Mount");
    const data = await fetch("  https://api.github.com/users/abhishekhm16");
    const res = await data.json();
    console.log(res);

    this.setState({
      userInfo: res,
    });
  }
  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    // const { name, location, contact } = this.props;
    // const { count, count2 } = this.state;
    console.log("child render");
    return (
      <div className="user-card">
        {/* <h1>count:{count}</h1>
        <button
          onClick={() => {
            //never update state variables directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button> */}
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{bio}</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
