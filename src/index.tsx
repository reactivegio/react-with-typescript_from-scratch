import React from "react";
import * as ReactDOM from "react-dom";

interface RootProps {
  message: string
}

const Index: React.FC<RootProps> = props => {
  return <div>{props.message}</div>;
};

ReactDOM.render(<Index message={"Hello world! I am Typescript."} />, document.getElementById("root"));
