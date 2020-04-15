import React from "react";
import Graph from "react-graph-vis";

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  },
  nodes: {
    physics: false,
    shape: "box",
    shadow: true,
  },
  manipulation: {
    enabled: true,
    // addNode: function(nodeData, callback) {
    //    nodeData.label ="Hello World";
    //    callback(nodeData)
    // }
  }
  
  // en: {
  //   addNode: "Add Node"
  // }
};

const events = {
  select: function (event: any) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  }
};

export default class App extends React.Component<Something, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      graph: {
        nodes: [
          { id: 1, label: "Main Idea", color: "#e04141" },
          { id: 2, label: "Node 2", color: "#e09c41" },
          { id: 3, label: "Node 3", color: "#e0df41" },
          { id: 4, label: "Node 4", color: "#7be041" },
          { id: 5, label: "Node 5", color: "#41e0c9" },
        ],
        edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }],
        // event: {

        // }
      },
    }
  }
  
  addNode() {
    console.log("testing 1, 2, 3");
    
  }

  render() {
    return (
      <main className="container my-5">
        <section className="justify-content-center">
          <div className="card shadow">
            <div className="card-body text-center">
              <button className="mb-3" onClick={this.addNode}>Add Node</button>
              <Graph graph={this.state.graph} 
              options={options} 
              events={events} 
              style={{ height: "650px", background: "mintcream", border: "lightcyan solid " }} />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

interface Something {
  graph: any;
}
