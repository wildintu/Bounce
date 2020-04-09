import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GroupProject: React.FC<GroupProjectProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Are You in A Group Project?</h1>
                        <p className="text-primary">We here at Bounce know exactly how easy and fun it is to make a plan with group of peers to get a goal accomplished.
                        Well, maybe in a perfect world. Every step of the way during a group project there are decisions that have to be made.
                        What will our project be on? What will we be using to present? Who is in charge of what? Is everyone on the same page?
                        Where can we meet up to work on this together? Where are we going out to eat to celebrate our finished product?
                        All of these decisions can take up so much valuable time and energy when you know the clock is ticking to get what feels like the real work done, while you’re still in the purgatory of getting the game plan together.
                        This is where Bounce can help. Using our survey technology and data visualization tools, group members can share ideas on an equal playing field, and members of the group can vote in real time on what ideas they want to move forward with. Saving precious time you could be spending getting the project done.</p>
                        <Link to ="/forum"><Button className="float-right">Let Get Started?</Button></Link>
                    </div>
                </div>
            </section>
        </main>
    );


};

interface GroupProjectProps { };

export default GroupProject;