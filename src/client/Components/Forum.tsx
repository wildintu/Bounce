import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Forum: React.FC<ForumProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Forum Setup</h1>
                        <Link to ="/diagram"><Button className="float-right">Let Get Started?</Button></Link>
                    </div>
                </div>
            </section>
        </main>
    );


};

interface ForumProps { };

export default Forum;