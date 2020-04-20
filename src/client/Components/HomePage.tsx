import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
                <Button size="sm" style={{ fontSize: "0.7em" }}>Let's get started</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default HomePage;

// <section className="justify-content-center">
//             <div className="card shadow">
//               <div className="card-body text-center">
//                 <h1 className="card-title text-primary text-center">
//                   Welcome To Bounce
//                 </h1>
//                 <h2 className="text-primary text-center">
//                   Bounce is Brainstorming! Bouncing multiple ideas off
//                   eachother! Brainstorming; is a way to generate ideas within a
//                   group setting, quick means to tapping the creativity of a
//                   number of people for a large number of ideas,and the ability
//                   to think freely. Bounce is an enivorment that fosters an
//                   uninhibited, non-judgmental explosion of ideas, concepts,
//                   policies, decisions, and strategies.{" "}
//                 </h2>

//                 <h4 className="text-primary text-center">
//                   Do you have one of the following?
//                                 </h4>
//               </div>
//             </div>
//           </section>
//           <Accordion>
//             <Card>
//               <Card.Header>
//                 <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                   A classroom project?
//             </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="0">
//                 <Card.Body>
//                   In a business, one of the biggest challenges for thier business is
//                   gauging customer’s satisfaction. A poll or survey are good tool to
//                   use to get feedback, but then you have to use seperate tools to
//                   utilize the data. Bounce can help with the entire process by
//                   providing a organized platform where consumers can input data and
//                   it immediately be displayed in a visual representation. This
//                   allows you to quickly recognize both issues and successes with how
//                   your business is providing the service. Another utilization of
//                   this tool is being able to use it to survey your workforce. As an
//                   employer, you don’t have an easy tool to survey the people that
//                   are in your business every day outside of setting up a suggestion
//                   jar. Bounce can be your digital suggestion jar, ensuring unbiased
//                   input from your employees. This gives your workers an oppurtunity
//                   to be heard and gives you a clearer view of oppurtunities to
//                   improve your organization.
//             </Card.Body>
//               </Accordion.Collapse>
//             </Card>
//             <Card>
//               <Card.Header>
//                 <Accordion.Toggle as={Button} variant="link" eventKey="1">
//                   A business idea?
//             </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="1">
//                 <Card.Body>In a business, one of the biggest challenges for thier business is gauging customer’s satisfaction.
//                 A poll or survey are good tool to use to get feedback, but then you have to use seperate tools to utilize the data. Bounce can help with the entire process by providing a organized platform where consumers can input data and it immediately be displayed in a visual representation.
//                 This allows you to quickly recognize both issues and successes with how your business is providing the service.
//                 Another utilization of this tool is being able to use it to survey your workforce. As an employer, you don’t have an easy tool to survey the people that are in your business every day outside of setting up a suggestion jar.
//                 Bounce can be your digital suggestion jar, ensuring unbiased input from your employees.
//                         This gives your workers an oppurtunity to be heard and gives you a clearer view of oppurtunities to improve your organization.</Card.Body>
//               </Accordion.Collapse>
//             </Card>
//             <Card>
//               <Card.Header>
//                 <Accordion.Toggle as={Button} variant="link" eventKey="2">
//                   A group project?
//             </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="2">
//                 <Card.Body>We here at Bounce know exactly how easy and fun it is to make a plan with group of peers to get a goal accomplished.
//                 //                         Well, maybe in a perfect world. Every step of the way during a group project there are decisions that have to be made.
//                 //                         What will our project be on? What will we be using to present? Who is in charge of what? Is everyone on the same page?
//                 //                         Where can we meet up to work on this together? Where are we going out to eat to celebrate our finished product?
//                 //                         All of these decisions can take up so much valuable time and energy when you know the clock is ticking to get what feels like the real work done, while you’re still in the purgatory of getting the game plan together.
// //                         This is where Bounce can help. Using our survey technology and data visualization tools, group members can share ideas on an equal playing field, and members of the group can vote in real time on what ideas they want to move forward with. Saving precious time you could be spending getting the project done.</Card.Body>
//               </Accordion.Collapse>
//             </Card>
//             <Card>
//               <Card.Header>
//                 <Accordion.Toggle as={Button} variant="link" eventKey="3">
//                   An idea?
//             </Accordion.Toggle>
//               </Card.Header>
//               <Accordion.Collapse eventKey="3">
//                 <Card.Body>Are you a writer? an artist? a game designer? Here at Bounce we know that 90% of creative ideas never make it past the brainstorm stage.
//                 We also know how much easier it is to bring a creative idea to life when you can bounce it off a fellow creative.
//                 The big problem with that can be distance. It can be hard to brainstorm with your friend in Seattle when you’re all the way in Austin and the best you can do to make up the distance is with a webcam.
//                         This is where Bounce can come in. Using our poll to create a web of ideas, you can literally see your ideas come to life.</Card.Body>
//               </Accordion.Collapse>
//               <Link to="/forum"><Button className="float-right">Let Get Started?</Button></Link>
//             </Card>
//           </Accordion>
