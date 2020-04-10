import * as React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC<HomeProps> = () => {

    return (
        <div>
        <main className="container my-5 ">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="card-title text-primary text-center">Welcome To Bounce!</h1>
                        <h2 className="text-primary text-center">Lets get Started</h2>
                        <h4 className="text-primary text-center">Do you have one of the following?</h4>
                        <h5 className="text-primary text-center">
                            <Link to="/classroom">A Classroom?</Link>
                        </h5>
                        <h5 className="text-primary text-center">
                            <Link to="/Business">A Business?</Link>
                        </h5>
                        <h5 className="text-primary text-center">
                            <Link to="/groupproject">A Group Project?</Link>
                        </h5>
                        <h5 className="text-primary text-center">
                            <Link to="/idea">An Idea?</Link>
                        </h5>
                    </div>
                </div>
            </section>
        </main>
        </div>
    );


};

interface HomeProps { };

export default HomePage;