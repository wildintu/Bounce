import React from "react";
import Graph from "react-graph-vis";
import { Card } from "react-bootstrap";
import { any } from "prop-types";

const options = {
  layout: {
    hierarchical: false
  },
  edges: {
    color: "#000000"
  }
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

export default class Collaboration extends React.Component<any,any> {
  constructor(props: any) {
    super(props);

    this.state = {
      graph: {
        nodes: [
          { id: 1, label: "Main Idea", color: "#e04141" },
          { id: 2, label: "Secondary Input", color: "#e09c41" },
          { id: 3, label: "Secondary Input", color: "#e0df41" },
          { id: 4, label: "Secondary Input", color: "#7be041" },
          { id: 5, label: "Secondary Input", color: "#41e0c9" }
        ],
        edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }]
      }
    }
  }

  async componentDidMount() {
    try {
      let r: Response = await fetch(`/api/session/${this.props.match.params.id}`);
      let json: any = await r.json();
      console.log(json);
      this.setState({
        graph: {
          nodes: [
            { id: 1, label: json.origUserPost, color: "#e04141" },
            { id: 2, label: "Secondary Input", color: "#e09c41" },
            { id: 3, label: "Secondary Input", color: "#e0df41" },
            { id: 4, label: "Secondary Input", color: "#7be041" },
            { id: 5, label: "Secondary Input", color: "#41e0c9" }
          ],
          edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }]
        }
      })
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
            <Card className="my-5 mx-auto" style={{"maxWidth": "800px"}}>
                <Graph graph={this.state.graph} options={options} events={events} style={{ height: "640px" }} />
            </Card>
    );
  }
}