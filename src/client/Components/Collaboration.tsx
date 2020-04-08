import * as React from 'react';

const Collaboration: React.FC<CollabProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Group Project Ideas</h1>
                        <p className="text-primary">gonna figure out how to make this inset webb of ideas</p>
                       
                    </div>
                </div>
            </section>
        </main>
    );


};

interface CollabProps { };

export default Collaboration;