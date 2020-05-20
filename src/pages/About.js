import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1 className="hero-title">Pupster</h1>
        <h2>The Bestest Boys and Girls</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p>
              Your go to page for finding all the doggos, puppos, and pupperinos. Whether you're yearning to find adorable pics of your favorite breeds, find new breeds to love, or match with doggo friends, Pupster is the place to be. It's totally pawesome!
            </p>
            <p>
              Use the Discover page to make friends. Thumbs up pups you love, or thumbs down puppers you think would make a better match for someone else. Don't worry, we won't notify the good boys and girls that you pass on, so nobody's feeling will get hurt. We know you still think they're heckin' cute as heck!
            </p>
            <p>
              Use the Search page to find pictures of the floofiest, splootiest, heckin' cutest dogs around! Start typing in a breed and the form will autofill with possible results. Sorry if we don't have what you're looking for! There are so many doggos, we tried our best! Once you press search you'll see pictures of that breed, and let me tell you, they're cute as heck! Save 'em, print 'em, send 'em, do whatever you want with 'em! Click the dropdown menu to see the full list of breeds and maybe you'll find some you never even knew existed! WOW!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;