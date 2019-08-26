import React from "react";
import {
  GraphView // required
} from "react-digraph";
import singlePathway from "./familiesData.json";

import styles from "./PathwayGraph.module.css";

const GraphConfig = {
  NodeTypes: {
    custom: {
      // // required to show empty nodes
      // typeText: "None",
      shapeId: "#custom", // relates to the type property of a node
      shape: (
        <symbol viewBox="0 0 100 100" id="custom" key="0">
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      )
    }
  },
  NodeSubtypes: {},
  EdgeTypes: {
    customEdge: {
      // required to show empty edges
      shapeId: "#customEdge",
      shape: (
        <symbol viewBox="0 0 50 50" id="customEdge" key="0">
          <circle cx="25" cy="25" r="8" fill="currentColor">
            {" "}
          </circle>
        </symbol>
      )
    }
  }
};

const NODE_KEY = "id"; // Allows D3 to correctly update DOM

class PathwayGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: singlePathway
    };
  }

  render() {
    const nodes = this.state.graph.nodes;
    const edges = this.state.graph.edges;

    const NodeTypes = GraphConfig.NodeTypes;
    const NodeSubtypes = GraphConfig.NodeSubtypes;
    const EdgeTypes = GraphConfig.EdgeTypes;

    return (
      <div id="graph" className={styles.graph}>
        <GraphView
          ref="GraphView"
          nodeKey={NODE_KEY}
          nodes={nodes}
          edges={edges}
          nodeTypes={NodeTypes}
          nodeSubtypes={NodeSubtypes}
          edgeTypes={EdgeTypes}
          onSelectNode={this.props.handleSelectArchetype}
          onUpdateNode={this.props.handleSelectArchetype}
          readOnly={true}
          showGraphControls={false}
          zoomDelay={0}
          backgroundFillId="white"
        />
      </div>
    );
  }
}

export default PathwayGraph;
