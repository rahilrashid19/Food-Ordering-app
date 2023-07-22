import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div>
      <h1>Batman</h1> <h6>vs</h6> <h1>Superman</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
