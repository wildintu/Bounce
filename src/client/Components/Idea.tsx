import * as React from 'react';

const Idea: React.FC<IdeaProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Do You Have an Idea?</h1>
                        <p className="text-primary">Are you a writer? an artist? a game designer? Here at Bounce we know that 90% of creative ideas never make it past the brainstorm stage.
                        We also know how much easier it is to bring a creative idea to life when you can bounce it off a fellow creative.
                        The big problem with that can be distance. It can be hard to brainstorm with your friend in Seattle when you’re all the way in Austin and the best you can do to make up the distance is with a webcam.
                        This is where Bounce can come in. Using our poll to create a web of ideas, you can literally see your ideas come to life. </p>
                        <button className="text-primary float-right"> Let Get Started?</button>
                    </div>
                </div>
            </section>
        </main>
    );


};

interface IdeaProps { };

export default Idea;