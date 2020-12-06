import React, { Component } from "react";
import { connect } from "react-redux";
import { setName, setAge } from "./actions/userAction";

class App extends Component {
  clickSetName() {
    this.props.setName("Taro Yamada");
  }

  clickSetAge() {
    this.props.setAge(30);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickSetName.bind(this)}>
          SetName
        </button>
        {this.props.name}<br />
        <button onClick={this.clickSetAge.bind(this)}>
          SetAge
        </button>
        {this.props.age}<br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch(setName(name)),
    setAge: (age) => dispatch(setAge(age))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
