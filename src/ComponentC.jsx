import ComponentD from "./Componentd";
import { UserContext } from "./ComponentA";
import React, { useContext } from "react";

export default function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>This is compnent C</h1>
      <h2>{`hello again ${user}`}</h2>
      <ComponentD />
    </div>
  );
}
