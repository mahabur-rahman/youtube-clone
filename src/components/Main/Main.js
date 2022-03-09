import React from "react";
import { Container, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
// style
import "./main.scss";

const Main = () => {
  return (
    <>
      <main id="mainPart">
        <Container>
          <Row>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </Row>
        </Container>
      </main>
    </>
  );
};

export default Main;
