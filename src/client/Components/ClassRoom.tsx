import * as React from 'react';

const ClassRoom: React.FC<ClassroomProps> = () => {

  return (
    <main className="container my-5">
      <section className="justify-content-center">
        <div className="card shadow">
          <div className="card-body text-center">
            <h1 className="text-primary text-center">Are You A Teacher?</h1>
            <p className="text-primary"> Even the greatest teachers aren’t mind readers.
            We know one of the hardest things is trying to get an accurate depiction of the understanding, or the gaps in understanding, in your students in the curiculum.
            This is where Bounce can help. Using our unique survey method, you can map out what your student’s strengths and weaknesses are.
            You just have to set up one of our polls simply asking each student what they feel like they don’t understand in the curiculum.
            You’ll have the option to require each student to submit atleast once. Once everyone has submitted at least once we’ll make a chart so you can literally see where pain points are. For example, if you’re a computer science teacher, and you see that everyone submitted they don’t understand typescript, that lets you know to go over typescript again.</p>
            <button className="text-primary float-right"> Let Get Started?</button>

          </div>
        </div>
      </section>
    </main>
  );


};

interface ClassroomProps { };

export default ClassRoom;