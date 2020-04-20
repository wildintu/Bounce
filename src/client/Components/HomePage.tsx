import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FadeInComp from "./FadeIn";

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <main>
      <Container fluid className="main-container d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
          <Row>
            <Col>
            <Card className="d-flex align-items-center justify-content-around mb-5 mr-5" style={{ fontFamily: 'Catamaran', boxShadow: "-0.2em 0.2em 0.4em #9E9E9E", height: "40vh", width: "30vw" }}>
                <h1 className="mb-5">Welcome to Bounce</h1>
                <FadeInComp />
                <Button as={Link} to={`/post`} size="sm" style={{ fontSize: "0.7em" }}>Let's get started</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default HomePage;

// const HomePage: React.FC<HomeProps> = () => {

//     return (
//         <div>
//         <main className="container my-5 ">
//             <section className="justify-content-center">
//                 <div className="card shadow">
//                     <div className="card-body text-center">
//                         <h1 className="card-title text-primary text-center">Welcome To Bounce!</h1>
//                         <h2 className="text-primary text-center">Lets get Started</h2>
//                         <h4 className="text-primary text-center">Do you have one of the following?</h4>
//                         <h5 className="text-primary text-center">
//                             <Link to="/classroom">A Classroom?</Link>
//                         </h5>
//                         <h5 className="text-primary text-center">
//                             <Link to="/Business">A Business?</Link>
//                         </h5>
//                         <h5 className="text-primary text-center">
//                             <Link to="/groupproject">A Group Project?</Link>
//                         </h5>
//                         <h5 className="text-primary text-center">
//                             <Link to="/idea">An Idea?</Link>
//                         </h5>
//                     </div>
//                 </div>
//             </section>
//         </main>
//         </div>
//     );


// };

// interface HomeProps { };

// export default HomePage;