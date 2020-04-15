import React from "react";
import Graph from "react-graph-vis";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { any, elementType } from "prop-types";

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
    shadow: true
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
      let r: Response = await fetch(`/api/session/${this.props.match.params.sessionid}`);
      let json: any = await r.json();
      let r2: Response = await fetch(`/api/session/${this.props.match.params.sessionid}/input`);
      let json2: any = await r2.json();
      // console.log(json2)
      let secInput = json2.map((element: any) => {
        return ({
          id: element.id,
          label: (`${element.secName}: ${element.secInput}`),
          color: '#e09c41'
        })
      })
      let bubbles: any = [{ id: 1, label: json.origUserPost, color: "#e04141" },...secInput]
      let arrows: any = bubbles.map((element: any,index: any) => {
        if(index+1 < bubbles.length) {
          return ({
            from: bubbles[0].id,
            to: bubbles[index+1].id
          })

        }
      })
      arrows.splice(-1,1);
      console.log(arrows);

      this.setState({
        graph: {
          nodes: [
            ...bubbles
            // { id: 1, label: json.origUserPost, color: "#e04141" },
            // { id: 2, label: json2.secInput, color: "" },
            // { id: 3, label: "Secondary Input", color: "#e0df41" },
            // { id: 4, label: "Secondary Input", color: "#7be041" },
            // ...secInput,
            // { id: 5, label: "Secondary Input", color: "#41e0c9" }
          ],
          edges: [...arrows]
          // edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }]
        }
      })
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    return (
          <Container style={{'marginTop': '40px'}}>
            <Button as={Link} to={`/collaboration/${this.props.match.params.sessionid}/input`}
          className="btn btn-primary ml-3"
          >Give Input</Button>  
            <Button as={Link} to={`/`}
          className="btn btn-primary ml-3"
          >Go Back</Button>  
            <Card className="my-5 mx-auto" style={{"maxWidth": "800px", "opacity": "0.8"}}>
                <Graph className="shadow" graph={this.state.graph} options={options} events={events} style={{ height: "640px" }} />
            </Card>
          </Container>

    );
  }
}