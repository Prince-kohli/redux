import React from "react";
import { useSelector } from "react-redux";
const Data = () => {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  const [show, setShow] = React.useState(false);
  return (
    <div>
      {show === true ? (
        <>
          <h2>Count{count}</h2>
          <h2>multiply{data}</h2>
        </>
      ) : null}
      {show === false ? (
        <button onClick={() => setShow(true)}>show</button>
      ) : (
        <button onClick={() => setShow(false)}>hide</button>
      )}
    </div>
  );
};

export default Data;
