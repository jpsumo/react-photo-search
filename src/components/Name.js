import React from "react";

export default class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mary"
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
    console.log(this.state.name);
  }

  render() {
    return (
      <section>
        <h5>Name</h5>
        <input value={this.state.name} onChange={this.handleNameChange} />
      </section>
    );
  }
}
