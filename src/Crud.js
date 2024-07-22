import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, edit, remove } from "./CrudSlice/CrudSlice";

const Crud = () => {
  const [data, setdata] = useState("");
  console.log("data", data);
  const dispatch = useDispatch();

  const crud = useSelector((state) => state.crud.Crud);
  console.log("crud", crud);

  const handleonSubmit = (e) => {
    e.preventDefault();
    dispatch(add(data));
    setdata("");
  };
  return (
    <div style={{ marginTop: 12 }}>
      <form onSubmit={handleonSubmit}>
        <input
          type="text"
          placeholder=""
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        <button style={{ marginLeft: 6 }} type="submit">
          Add
        </button>
      </form>

      {crud.map((num, i) => (
        <div key={i}>
          {" "}
          <h3 className="forms">{num.text}</h3>
          <button
            className="forms"
            style={{ height: 20, width: 50, marginTop: 20, marginLeft: 10 }}
            onClick={() => dispatch(remove(num))}
          >
            Delete
          </button>
          <button onClick={() => dispatch(edit(num))}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Crud;
