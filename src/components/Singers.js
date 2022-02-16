import React from "react";

class Users extends React.Component {
  render() {
    console.log(this.props);
    const { name, age } = this.props;

    return (
      <div>
        <p>
          Chanteurs: {name} {age} ans
        </p>
      </div>
    );
  }
}

export default Users;
