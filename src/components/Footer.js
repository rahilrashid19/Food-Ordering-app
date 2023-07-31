import { useState } from "react";

const FooterComponent = () => {
  function add(count) {
    return count + 1;
  }

  function sub(count) {
    return count - 1;
  }
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          const increment = add(count);
          setCount(increment);
        }}
      >
        {" "}
        +{" "}
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          const decremenet = sub(count);
          setCount(decremenet);
        }}
      >
        {" "}
        -{" "}
      </button>
    </>
  );
};

export default FooterComponent;
