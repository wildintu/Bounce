import React from "react";
import Graph from "react-graph-vis";
import { Card, Container, Button, Modal, ModalDialog } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const months: string[] = ["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"]


export default class Collaboration extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      events: {},
      graph: {
        nodes: [],
        edges: [],
      },
      options: {},
      alertMsg: null,
      show: false,
    }
  };

  handleClose = () => {
    this.setState({
      show: false
    })
  };

  handleShow = () => {
    this.setState({
      show: true,
    })
  };

  async componentDidMount() {
    try {
      let r: Response = await fetch('/api/colors');
      let json: any = await r.json();
      let r2: Response = await fetch(`/api/session/${this.props.match.params.sessionid}/input`);
      let json2: any = await r2.json();

      let secInput = json2.map((element: any) => {
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
          },
          manipulation: {
            enabled: true
          },
          layout: {
            hierarchical: {
              enabled: true,
              levelSeparation: 100,
              nodeSpacing: 500,
              treeSpacing: 0,
              blockShifting: true,
              edgeMinimization: true,
              parentCentralization: true,
              direction: 'UD',        // UD, DU, LR, RL
              sortMethod: 'directed',  // hubsize, directed
            },
          },
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
            var { nodes, edges, pointer } = event;
            let position = pointer.DOM;
            let rNode: Response = await fetch(`/api/session/${this.props.match.params.sessionid}/input/${nodes[0]}`);
            let [nodeObj]: any = await rNode.json();
            let dateSQL = new Date(nodeObj.created_at)
            let dateFormat = `${months[dateSQL.getMonth()]} ${dateSQL.getDate()}, ${dateSQL.getFullYear()}`

            this.setState({
              alertMsg: (
                <Card bg="warning" id="popup"
                  style={{
                    "width": "18em", "position": "absolute", "zIndex": 1,
                    "top": (position.y), "left": (position.x)
                  }}>
                  <Card.Title as="h6" className="mb-0">{nodeObj.secName}: {nodeObj.secInput}</Card.Title>
                  <Card.Body className="px-0 py-0" as="small">{dateFormat}</Card.Body>
                </Card>
              )
            })

          },
          deselectNode: (event: any) => {
            this.setState({
              alertMsg: (<div></div>)
            })
          },

        },
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container className="my-5 mx-auto col-lg-8" style={{ 'marginTop': '40px' }}>
          <Button as={Link} to={`/`}
            className="btn btn-primary my-auto my-5 mx-auto"
          >Go Back</Button>

          <Button
            onClick={this.handleShow}
            style={{ 'marginLeft': '40px' }}
            className="btn btn-primary my-auto"
          >
            Invite
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose} animation={true}>
            <Modal.Header closeButton>
              <Modal.Title>Share Link</Modal.Title>
            </Modal.Header>
            <Modal.Body> {`http://localhost:3000/collaboration/${this.props.match.params.sessionid}`} </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
          </Button>
              <CopyToClipboard text={`http://localhost:3000/collaboration/${this.props.match.params.sessionid}`}>
                <Button variant="primary" onClick={this.handleClose}>
                  Copy Link
          </Button>
              </CopyToClipboard>
            </Modal.Footer>
          </Modal>

          <Card className="my-5 mx-auto" style={{ "maxWidth": "1000px", "maxHeight": "700px", "opacity": "0.8" }}>
            <div>
              {this.state.alertMsg}
            </div>
            <Graph className="shadow" graph={this.state.graph}
              options={this.state.options} events={this.state.events} style={{ height: "640px", "zIndex": 0 }} />
          </Card>
        </Container>
      </React.Fragment>

    );
  }
}