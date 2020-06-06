import React, { PureComponent } from "react";

class Clock extends PureComponent {
  constructor() {
    super();
    this.state = {
      localetime: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { localetime: new Date().toLocaleString() };
      });
    }, 1000);
  }
  render() {
    return (
      <React.Fragment>
        <h4>{this.state.localetime}</h4>
      </React.Fragment>
    );
  }
}

export default Clock;
