import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, edit, remove } from "./store/CrudSlice";

const Crud = () => {
  const [data, setdata] = useState("");
  const [editToDoObj, seteditTodoObj] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  console.log("id", editToDoObj.id);
  console.log("data", data);
  const dispatch = useDispatch();

  const crud = useSelector((state) => state.crud.Crud);
  console.log("crud", crud);

  const handleonSubmit = (e) => {
    e.preventDefault();
    dispatch(add(data));
    setdata("");
  };

  const editHandler = (num) => {
    seteditTodoObj(num);
    setdata(num.text);
    setIsEdit(true);
  };
  const saveBtnHandler = (e) => {
    e.preventDefault();
    dispatch(edit({ id: editToDoObj.id, text: data }));
    setdata("");
    setIsEdit(false);
  };

  return (
    <div style={{ marginTop: 12 }}>
      <form>
        <input
          type="text"
          placeholder=""
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        {isEdit ? (
          <button
            style={{ marginLeft: 6 }}
            type="submit"
            onClick={saveBtnHandler}
          >
            save
          </button>
        ) : (
          <button
            style={{ marginLeft: 6 }}
            type="submit"
            onClick={handleonSubmit}
          >
            Add
          </button>
        )}
        {/* <button style={{ marginLeft: 6 }} type="submit">
          Add
        </button> */}
      </form>

      {crud.map((num, i) => (
        <div key={i}>
          <h3 className="forms">{num.text}</h3>
          <button
            className="forms"
            style={{ height: 20, width: 50, marginTop: 20, marginLeft: 10 }}
            onClick={() => dispatch(remove(num))}
          >
            Delete
          </button>
          <button onClick={() => editHandler(num)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Crud;
