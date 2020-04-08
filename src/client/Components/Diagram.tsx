import * as React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';

const Diagram: React.FC<DiagramProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Diagram</h1>
                        <h4 className="text-primary text-center">text example exist here</h4>
                        {/* <Link to ="/Diagram"><Button className="float-right">Let Get Started?</Button></Link> */}
                    </div>
                </div>
            </section>
        </main>
    );


};

interface DiagramProps { };

export default Diagram;