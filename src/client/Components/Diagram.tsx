import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

const Diagram: React.FC<DiagramProps> = () => {

    let nodes = [
        {
            id: "node1",
            height: 100,
            width: 100,
            offsetX: 100,
            offsetY: 200
        }
    ];

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow" style={{width: '100%', height: '800px'}}>
                    <div className="card-body">
                        <DiagramComponent style={{width: '100%', height: '800px'}} nodes={nodes} id="diagram"/> 
                    </div>
                </div>
            </section>
        </main>
    );


    {/* <h1 className="text-primary text-center">Diagram</h1>
    <h4 className="text-primary text-center">text example exist here</h4> */}
    {/* <Link to ="/Diagram"><Button className="float-right">Let Get Started?</Button></Link> */ }
};

interface DiagramProps { };

export default Diagram;