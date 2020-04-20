import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Fetch from "./Fetch";
import { Container, Form, Button, Row, Card } from "react-bootstrap";
import { IMain } from "./PostMain";

const PostInput: React.FC<IMain> = (props: any) => {
  let origId = props.match.params.sessionid;
  let nodeId = props.match.params.inputid;
  let randVal = (Max: number, Min: number) => Math.floor(Math.random() * (Max - Min)) + Min;

  const [secName, setSecName] = useState<string>("");
  const [secInput, setSecInput] = useState<string>("");
  const [level, setLevel] = useState<number>();
  const [idea, setIdea] = useState<JSX.Element>();

  let handleClick = async () => {
    if (secName !== "" && secInput !== "") {
      let results: any = await Fetch(
        {
          secName: secName,
          secInput: secInput,
          nodeId: nodeId,
          level: level+1
        },
        `/api/session/${origId}/input`,
        "POST"
      );
      props.history.push(`/collaboration/${origId}`);
    }
  };

  let handleClickDelete = async () => {
      let results: any = await Fetch(
        {},
        `/api/session/${origId}/input/${nodeId}`,
        "DELETE"
      );
      props.history.push(`/collaboration/${origId}`);
    
  };

  let fetchApi = async () => {
    let r: Response = await fetch(`/api/session/${origId}/input/${nodeId}`);
    let [resObj]: any = await r.json();
    setLevel(resObj.level);
    setIdea(
      <Container>
        <Row>
          <h4>
            {resObj.secName}: {resObj.secInput}
          </h4>
        </Row>
      </Container>
    )
  }

  let checkColors = async () => {
    let r: Response = await fetch(`/api/colors/${level+1}`);
    let resObj: any = await r.json();
    if(resObj !== undefined) {
      let red = randVal(255,1);
      let green = randVal(255,1);
      let blue = randVal(255,1);
      let rgb = `rgb(${red}, ${green}, ${blue})`;
      let post: any = await Fetch({
        color: rgb
      },
      '/api/colors',
      'POST'
      )
    }
  }

  useEffect(() => {
    fetchApi();
    checkColors();
  }, [])

  return (
    <Container fluid className="mb-3">
      <Card className="col-lg-5 mt-4 mx-auto" style={{ "opacity": "0.85" }}>
      <h3 className="form-group mt-3 mx-auto text-center">
      {idea}
      </h3>
      <Form className="mt-3">
        <Form.Group className="form-group mx-auto my-auto">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            id="secName"
            value={secName}
            onChange={(e: any) => setSecName(e.target.value)}
          />
          <Form.Label style={{ "marginTop": "25px" }}>Input</Form.Label>
          <Form.Control as="textarea" rows="3"
            type="text"
            id="secInput"
            value={secInput}
            onChange={(e: any) => setSecInput(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button className="btn btn-primary mx-auto mb-4"
        onClick={() => {
          handleClick();
        }}>Submit Input</Button>
      <Button as={Link} to={`/collaboration/${props.match.params.sessionid}`}
        className="btn btn-primary mx-auto mb-4"
      >Go Back</Button>
      <Button className="btn btn-danger mx-auto mb-4"
      onClick={() => {
        handleClickDelete();
      }}
      >Delete Input</Button>
      </Card>
    </Container>
  );
};

export interface IInput extends RouteComponentProps<{
  sessionid: string
}> { }

export default PostInput;