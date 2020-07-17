import React, { Component } from "react";
import { Card, Button } from "antd";
import "./card.css";
import "antd/dist/antd.css";
const GameCard = (props) => {
  return (
    <div>
      {" "}
      <Card
        title={
          <div>
            <p>{props.title}</p>
            <p>{props.studio}</p>
          </div>
        }
        style={{ width: props.width }}
        cover={props.img}>
        {" "}
        <p>Platforme: {props.platform}</p>
        <p>Genres: {props.gender}</p>
        {props.inner}
        <div className='btn'>
          <Button
            type='primary'
            style={{ margin: "auto auto", alignText: "center" }}>
            <a target='_blank' href={props.link}>
              Watch Trailer
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default GameCard;
