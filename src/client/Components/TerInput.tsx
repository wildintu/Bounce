import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router";

interface ITerInput extends RouteComponentProps{}

const TerInput: React.FC<ITerInput> = (props: any) => {
    let nodeid: any = props.match.params.inputid;
    let origid: any = props.match.params.sessionid;

    useEffect(() => {
        console.log(`${origid} - origid ${nodeid} - nodeid`)
    }, []) 

    return (
        <h1>TerInput</h1>
    )
}

export default TerInput;