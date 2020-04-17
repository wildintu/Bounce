import React from "react";
import Graph from "react-graph-vis";
import { Card, Container, Button, Popover, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { any, elementType } from "prop-types";

const months: string[] = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"]

// const options = {
//   layout: {
//     hierarchical: false
//   },
//   edges: {
//     color: "#000000"
//   },
//   nodes: {
//     physics: true,
//     shape: "box",
//     shadow: true
//   },
//   autoResize: true,

// };

// const events = {
//   click: (event: any) => {
//     var { nodes, edges } = event;
//     // console.log("Selected nodes:");
//     // console.log(nodes);
//     // console.log("Selected edges:");
//     // console.log(edges);
//     // console.log(event)
//   },
//   doubleClick: (event: any) => {
//     var { nodes, edges } = event;
//     props.history.push(nodes);

//   }
// };


export default class Collaboration extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      labelMsg: null,
      events: {
        click: (event: any) => {
          var { nodes, edges } = event;
        },
        doubleClick: (event: any) => {
          var { nodes, edges } = event;
          props.history.push(`/collaboration/${this.props.match.params.sessionid}/input/${nodes}`);

        },
        selectNode: (event: any) => {
          var { nodes, edges } = event;
          console.log(nodes);
        },
        deselectNode: (event: any) => {

        }
      },
      graph: {
        nodes: [],
        edges: [],
      },
      options: {
        layout: {
          hierarchical: false
        },
        edges: {
          color: "#000000"
        },
        nodes: {
          physics: true,
          shape: "box",
          shadow: true
        },
        autoResize: true,
      }
    }
  }

  async componentDidMount() {
    try {
      let r: Response = await fetch('/api/colors');
      let json: any = await r.json();
      let r2: Response = await fetch(`/api/session/${this.props.match.params.sessionid}/input`);
      let json2: any = await r2.json();
      // console.log(json)

      let secInput = json2.map((element: any) => {
        // console.log(element.level)
        return ({
          id: element.id,
          label: (`${element.secName}: ${element.secInput}`),
          color: json[element.level - 1].color,
          title: "pepehands"
        })
      })
   
      let arrows = json2.map((element: any) => {
        return ({
          from: element.nodeId,
          to: element.id,
        })
      })

      arrows.shift()

      this.setState({
        graph: {
          nodes: [...secInput],
          edges: [...arrows]
        },
        options: {
          interaction: {
            hover: true,
            hoverConnectedEdges: true,
            tooltipDelay: 100,
          },
          layout: {
            hierarchical: {
              enabled: true,
              levelSeparation: 100,
              nodeSpacing: 300,
              treeSpacing: 0,
              blockShifting: true,
              edgeMinimization: true,
              parentCentralization: true,
              direction: 'UD',        // UD, DU, LR, RL
              sortMethod: 'directed',  // hubsize, directed
              // shakeTowards: 'roots'  // roots, leaves
            },
          },
          // configure: {
          //   enabled: true,
          //   filter: 'nodes,edges',
            
          //   showButton: true
          // },
          edges: {
            color: "#000000",
            
          },
          nodes: {
            physics: false,
            shape: "box",
            shadow: true,
            title: "pepehands"
          },
          autoResize: true,
          manipulation: {
            enabled: true,
            initiallyActive: true,
            addNode: true,
            addEdge: true,
            editNode: () => {},
            editEdge: true,
            deleteNode: true,
            deleteEdge: true,
            controlNodeStyle:{
              // all node options are valid.
            }
          }
          
          
        },
        events: {
          click: (event: any) => {
            var { nodes, edges } = event;
          },
          doubleClick: (event: any) => {
            var { nodes, edges } = event;
            this.props.history.push(`/collaboration/${this.props.match.params.sessionid}/input/${nodes}`);
          },
          selectNode: async (event: any) => {
            var { nodes, edges } = event;
            let rNode: Response = await fetch(`/api/session/${this.props.match.params.sessionid}/input/${nodes[0]}`);
            let [nodeObj]: any = await rNode.json();
            let dateSQL = new Date(nodeObj.created_at)
            let dateFormat = `${months[dateSQL.getMonth()]} ${dateSQL.getDate()}, ${dateSQL.getFullYear()}`

            this.setState({
              alertMsg: (<div></div>
              )
            })
          },
          deselectNode: (event: any) => {
            this.setState({
              alertMsg: (<div></div>)
            })
          }
        },
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Container style={{ 'marginTop': '40px' }}>
        {/* <Button as={Link} to={`/collaboration/${this.props.match.params.sessionid}/input`}
          className="btn btn-primary ml-3"
          >Give Input</Button>   */}

        <Button as={Link} to={`/`}
          className="btn btn-primary ml-3 my-auto"
        >Go Back</Button>
        
        <Card className="my-5 mx-auto" style={{ "maxWidth": "1000px", "maxHeight": "700px", "opacity": "0.8" }}>
          <Graph className="shadow" graph={this.state.graph} options={this.state.options} events={this.state.events} style={{ height: "640px" }} />
        </Card>
      </Container>

    );
  }
}