import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Fetch from "./Fetch";
import { Container, Form, Button } from "react-bootstrap";
import { IMain } from "./PostMain";

const PostInput: React.FC<IMain> = (props: any) => {
  const [secName, setSecName] = useState<string>("");
  const [secInput, setSecInput] = useState<string>("");
//   const [anonymous, setAnonymous] = useState<string>("");

  let handleClick = async () => {
    if (secName !== "" && secInput !== "") {
      let results: any = await Fetch(
        {
          origId: props.match.params.sessionid,
          secName: secName,
          secInput: secInput
        //   anonymous: anonymous
        },
        `/api/session/${props.match.params.sessionid}/input`,
        "POST"
      );
      props.history.push(`/collaboration/${props.match.params.sessionid}`);
    }
  };

  return (
    <Container>
    <Form>
    <Form.Group className="form-group col-lg-4">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          id="secName"
          value={ secName }
          onChange={(e: any) => setSecName(e.target.value)}
        />
        <Form.Label style={{"marginTop": "25px"}}>Input</Form.Label>
        <Form.Control as="textarea" rows="3"
          type="text"
          id="secInput"
          value={ secInput }
          onChange={(e: any) => setSecInput(e.target.value)}
        />
        </Form.Group>
        </Form>
        <Button className="btn btn-primary ml-3"
          onClick={() => {
            handleClick();
          }}>Submit Input</Button>
        <Button as={Link} to={`/collaboration/${props.match.params.sessionid}`}
          className="btn btn-primary ml-3"
          >Go Back</Button>  
    </Container>
  );
};

export interface IInput extends RouteComponentProps <{
  sessionid: string
}> {}

export default PostInput;