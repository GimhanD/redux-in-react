import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showcounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increse", ammount: 5 });
  };

  const toggleCounterHandler = () => {

    dispatch({ type: 'toggle' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div> }
      <div>
        <div>
          <button className={classes.button} onClick={incrementHandler}>
            Increment
          </button>
          <button className={classes.button} onClick={increaseHandler}>
            Increse by 5
          </button>
          <button className={classes.button} onClick={decrementHandler}>
            Decrement
          </button>
        </div>
        <button className={classes.toggleButton} onClick={toggleCounterHandler}>
          Toggle Counter
        </button>
      </div>
    </main>
  );
};

export default Counter;
