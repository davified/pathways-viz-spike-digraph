import React from "react";
import "./App.css";
import Pathways from "./Pathways";
import SelectedArchetype from "./SelectedArchetype";

class App extends React.Component {
  state = {
    selectedArchetype: ""
  };

  render() {
    return (
      <div>
        <SelectedArchetype
          selectedArchetype={this.state.selectedArchetype}
          handleSelectArchetype={this.handleSelectArchetype}
        />
        <Pathways handleSelectArchetype={this.handleSelectArchetype} />
      </div>
    );
  }

  handleSelectArchetype = selectedArchetype => {
    this.setState({
      selectedArchetype
    });
  };
}

export default App;
