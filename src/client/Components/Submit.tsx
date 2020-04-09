<<<<<<< HEAD
import * as React from 'react';

const Submit: React.FC<SubmissionProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Group Project Ideas</h1>
                        <p className="text-primary">Hey class we are using this really awesome new program called Bounce to survey ya’ll for ideas for the group project.
                        This app is perfect for brainstorming! You probably recognize it when I used it at the beginning of the semester to poll you guys on your understanding of javascript.
                        Fun fact, this app was developed by students in the past cohort during the quarantine! Thank goodness they came up with a cure to corona at the end of april amirite?
                        Entire crisis was almost completed averted. Anyways. For this poll, input 1 idea into the submission field below. This will take you to the collaboration page.
                        Everyone in class must submit atleast 1 idea, and then once you get to the collaboration page, you must upvote another idea that was input or submit an additional idea inspired by some of your classmate’s ideas.
                        This will streamline the idea making process that usually takes a week into about 1 day.
                        Remember the guidelines for the project idea we laid out in class this morning. Happy Collaborating!</p>
                        <form>
                            <label>
                                
                             <input type="text" placeholder="Input ideas here..." />
                            </label>
                        <button type="submit" className="text-primary float-right" value="Submit"> Submit </button>
                            <input type="text" placeholder="enter nickname here"/>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );


};

interface SubmissionProps { };

=======
import * as React from 'react';

const Submit: React.FC<SubmissionProps> = () => {

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-primary text-center">Group Project Ideas</h1>
                        <p className="text-primary">Hey class we are using this really awesome new program called Bounce to survey ya’ll for ideas for the group project.
                        This app is perfect for brainstorming! You probably recognize it when I used it at the beginning of the semester to poll you guys on your understanding of javascript.
                        Fun fact, this app was developed by students in the past cohort during the quarantine! Thank goodness they came up with a cure to corona at the end of april amirite?
                        Entire crisis was almost completed averted. Anyways. For this poll, input 1 idea into the submission field below. This will take you to the collaboration page.
                        Everyone in class must submit atleast 1 idea, and then once you get to the collaboration page, you must upvote another idea that was input or submit an additional idea inspired by some of your classmate’s ideas.
                        This will streamline the idea making process that usually takes a week into about 1 day.
                        Remember the guidelines for the project idea we laid out in class this morning. Happy Collaborating!</p>
                        <form>
                            <label>
                                
                             <input type="text" placeholder="Input ideas here..." />
                            </label>
                        <button type="submit" className="text-primary float-right" value="Submit"> Submit </button>
                            <input type="text" placeholder="enter nickname here"/>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );


};

interface SubmissionProps { };

>>>>>>> 3875946732e8a8a7a536384da28065519d337974
export default Submit;