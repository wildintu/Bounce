import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Fetch from "./Fetch";
import { Container, Form, Button } from "react-bootstrap";

const PostMain: React.FC<IMain> = props => {
  const [name, setName] = useState<string>("");
  const [session, setSession] = useState<string>("");
  const [ideaType, setIdeaType] = useState<string>("");

  let handleClick = async () => {
    if (name !== "" && session !== "" && ideaType !== "") {
      let results: any = await Fetch(
        {
          origUserName: name,
          origUserPost: session,
          ideaType: ideaType
        },
        "/api/session",
        "POST"
      );
      props.history.push(`/collaboration/${results.insertId}`);
    }
  };

  return (
    <Container>
    <Form>
    <Form.Group className="form-group col-lg-4">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          value={ name }
          onChange={(e: any) => setName(e.target.value)}
        />
        <Form.Label style={{"marginTop": "25px"}}>Idea Type</Form.Label>
        <Form.Control
          type="text"
          id="ideaType"
          value={ ideaType }
          onChange={(e: any) => setIdeaType(e.target.value)}
        />
        <Form.Label style={{"marginTop": "25px"}}>Session Input</Form.Label>
        <Form.Control as="textarea" rows="3"
          type="text"
          id="session"
          value={ session }
          onChange={(e: any) => setSession(e.target.value)}
        />
        </Form.Group>
        </Form>
        <Button className="btn btn-primary ml-3"
          onClick={() => {
            handleClick();
          }}>Submit</Button>
        <Button as={Link} to={`/`}
          className="btn btn-primary ml-3"
          >Go Back</Button>  
    </Container>
  );
};

export interface IMain extends RouteComponentProps {
  props?: any
}

export default PostMain;