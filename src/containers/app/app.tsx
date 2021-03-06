import React from "react";
import "./app.scss";
export default function Root(props) {
  return <section className="player-app">{props.name} is mounted!</section>;
}
