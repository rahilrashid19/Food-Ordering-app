import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops</h1>
      <h4>Something Went Wrong..</h4>
      <h6>Sorry For The Inconvinence</h6>
      <h4>{err.Status + ":" + { err }}</h4>
    </>
  );
};

export default Error;
