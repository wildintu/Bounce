import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row } from "react-bootstrap";
import Fetch from "./Fetch";

interface ITerInput extends RouteComponentProps { }

const TerInput: React.FC<ITerInput> = (props: any) => {
    let nodeid: any = props.match.params.inputid;
    let origid: any = props.match.params.sessionid;

    const [terName, setTerName] = useState<string>("");
    const [terInput, setTerInput] = useState<string>("");
    const [idea, setIdea] = useState<JSX.Element>();

    let handleClick = async () => {
        if (terName !== "" && terInput !== "") {
            let result: any = await Fetch({
                branchid: nodeid,
                tername: terName,
                terinput: terInput
            }, `/api/session/${origid}/input/${nodeid}/branch`,
                'POST')
            props.history.push(`/collaboration/${origid}`)
        }
    }

    let fetchApi = async () => {
        let r: Response = await fetch(`/api/session/${origid}/input/${nodeid}`);
        let [resObj]: any = await r.json();
        if(resObj === undefined) {
            let r2: Response = await fetch(`/api/session/${origid}/branch/${nodeid}`);
            let res2Obj: any = await r2.json();
            setIdea(
                <Row>
                    <h1>
                    {res2Obj.tername}: {res2Obj.terinput}
                    </h1>
                </Row>
            )
        } else {
            setIdea(
                <Row>
                    <h1>
                    {resObj.secName}: {resObj.secInput}
                    </h1>
                </Row>
            )
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return (

        <Container>
            {idea}
            <Form>
                <Form.Group className="form-group col-lg-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="terName"
                        value={terName}
                        onChange={(e: any) => setTerName(e.target.value)}
                    />
                    <Form.Label style={{ "marginTop": "25px" }}>Input</Form.Label>
                    <Form.Control as="textarea" rows="3"
                        type="text"
                        id="terInput"
                        value={terInput}
                        onChange={(e: any) => setTerInput(e.target.value)}
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
    )
}

export default TerInput;