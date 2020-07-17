import React from "react";
import logo from "./logo.svg";
import bghead from "./img/header.png";
import GameCard from "./components/card/Card";
import "./App.css";

import data from "./data.json";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  const style = { background: "#0092ff", padding: "8px 0" };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={bghead} className='head-img' />{" "}
        <Container>
          <Row sm={1} xd={4} md={4} lg={3}>
            {data.map((data) => {
              return (
                <Col
                  key={data.id}
                  sm={5}
                  xd={4}
                  md={4}
                  lg={4}
                  style={{ padding: "3%" }}>
                  <GameCard
                    title={data.title}
                    studio={data.studio}
                    img={<img style={{ width: "100%" }} src={data.image} />}
                    inner={data.description}
                    platform={data.platform}
                    gender={data.type}
                    link={data.trailer}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
