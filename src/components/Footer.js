import { useState } from "react";

const FooterComponent = () => {
  // useState Practice

  function add(count) {
    return (count += 1);
  }

  function subtract(count) {
    return (count -= 1);
  }

  const [count, setCount] = useState(0);
  return (
    <>
      <h1> The Count Is : {count}</h1>
      <button
        onClick={() => {
          const increment = add(count);
          setCount(increment);
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() => {
          const decrement = subtract(count);
          setCount(decrement);
        }}
      >
        {" "}
        -{" "}
      </button>
    </>
  );
};

export default FooterComponent;
