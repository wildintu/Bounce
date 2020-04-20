import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import Fetch from "./Fetch";
import { Container, Form, Button, Card } from "react-bootstrap";

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
    <Container fluid className="mb-3">
      <Card className="col-lg-5 mt-4 mx-auto" style={{ "opacity": "0.8" }}>
      <h3 className="form-group mt-3 mx-auto text-center">
        Start a Brainstorm Session!
      </h3>
    <Form className="mt-3">
    <Form.Group className="form-group mx-auto my-auto" style={{  }}>
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
        <Button as={Link} to={`/`}
        className="btn btn-primary mx-auto"
          onClick={() => {
            handleClick();
          }}>Submit</Button>
        <Button as={Link} to={`/`}
          className="btn btn-primary mx-auto mb-4"
          style={{ 'marginTop': '20px'  }} 
          >Go Back</Button> 
          </Card> 
    </Container>
  );
};

export interface IMain extends RouteComponentProps {
  props?: any
}

export default PostMain;