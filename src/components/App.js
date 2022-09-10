import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {

  state = { deadline: 'November 25, 2022', newDeadline: '' }

  changeDeadline() {
    // this.setState({ deadline: 'December 25, 2022' })

    this.setState({ deadline: this.state.newDeadline })
  }

  render() {
    return (
      <div>
        <div className="App-title">Countdown to {this.state.deadline} </div>
        <Clock deadline={this.state.deadline} />
        <div>
          <input placeholder="new date" onChange={event => this.setState({ newDeadline: event.target.value })} />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
