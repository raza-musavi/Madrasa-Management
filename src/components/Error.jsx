import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <p>OOOOooooo....×͜×...!!!!!</p>
      <p>something wrong.....!?🚨⚠️❗</p>
      <p>⚠️❗</p>
      <hr />
      <p>{error.status}</p>
      <p>{error.statusText}</p>
    </>
  );
};

export default Error;
