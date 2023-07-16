import React from "react";
import ReactDOM from "react-dom/client";

const name1 = React.createElement("h2", {}, "Batman Op");

const name2 = React.createElement("h2", {}, "Old  Superman");

const name3 = React.createElement("h1", {}, "VS");

const container = React.createElement("div", { className: "container" }, [
  name1,
  name3,
  name2,
]);

const newRoot = ReactDOM.createRoot(document.getElementById("root"));

newRoot.render(container);
