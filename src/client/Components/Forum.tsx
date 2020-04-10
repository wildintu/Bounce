import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

const Forum: React.FC<ForumProps> = () => {

    // const { id } = useParams();
    // const history = useHistory();

    const [ name, setName ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value); 
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

    const submit = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault();
        console.log("Its working?");
    }
    // CODE FROM THE CHIRPER TS LAB: might be useful?
    // useEffect(() => {
    //     (async () => {
    //         let res = await fetch(`/api/chirps/${id}`);
    //         let chirp = await res.json();
    //         console.log(chirp);
    //         //two code line is to preset the bar value.
    //         setUsername(chirp.username);
    //         setMessage(chirp.message);
    //     })();
    // }, [id])

    return (
        <main className="container my-5">
            <section className="justify-content-center">
                <div className="card shadow">
                    <div className="card-body">
                        <h1 className="text-primary">Forum Setup</h1>
                        <h5 className="card-title text-primary">Name of Survey</h5>
                        <input value={name} 
                        onChange={handleNameChange} 
                        placeholder="name" 
                        type="text"/>
                        <h5 className="card-title text-primary mt-2">Description</h5>
                        <textarea value={message}
                        onChange={handleMessageChange} 
                        className="form-control" 
                        placeholder="enter text here" 
                        name="text" 
                        id="text" 
                        rows={7} />
                        <Link to ="/diagram">
                            <Button 
                            onClick={submit}
                            className="float-right mt-2">Let Get Started?</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );


};

interface ForumProps { };

export default Forum;