import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Crud from "./Crud";
// import Data from "./Data";
import {
  increment,
  decrement,
  multiply,
  incrementByAmount,
} from "./counterSlice/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();
  console.log("count", count, data);
  return (
    <div className="App">
      <h1>Redux ToolKit</h1>
      {/* <Data /> */}
      <hr></hr>
      <div>
        <h2>count{count}</h2>
        <h2>multiply{data}</h2>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(multiply())}
        >
          multiply
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(6))}
        >
          incrementByAmount 6
        </button>
      </div>

      <Crud />
    </div>
  );
}

export default App;
