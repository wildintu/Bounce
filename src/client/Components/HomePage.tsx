import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import FadeInComp from "./FadeIn";
// import Logo from "../../../public/images/logoidea.png";

const HomePage: React.FC = () => {
    return (
        <React.Fragment>
            <main>
                <Container fluid className="d-flex" style={{ height: "100%" }}>
                    <Row className="mx-auto my-auto">
                        <Col>
                            <Card className="mb-2 mr-5 d-flex flex-column" style={{ fontFamily: 'Catamaran', boxShadow: "-0.2em 0.2em 0.4em #9E9E9E", height: "60vh", width: "50vw" }}>
                                {/* <span className="mb-5"> */}
                                <Row className="d-flex" style={{ 'height': '50%' }}>
                                    <Col lg={8} md={4} className="mx-auto d-flex" style={{ "height": "100%" }}>
                                        <Image src={window.location.origin + "/images/logoidea.png"} className="mx-auto"
                                            style={{ 'height': '100%' }} />
                                    </Col>
                                </Row>
                                {/* </span> */}
                                <div>
                                    <FadeInComp />
                                </div>

                                <Button as={Link} to={`/post`} className="mx-auto mt-auto" style={{ fontSize: "1.2em", "height": "2em" }}>Let's Get Started</Button>
                                <Row style={{ "height": "12%" }}></Row>
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