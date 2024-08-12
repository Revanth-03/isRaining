import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isRaining: false,
    };
  }
  render() {
    return <h1>Is it Raining?{this.state.isRaining ? "Yes" : "No"}</h1>;
  }
}

export default App;
