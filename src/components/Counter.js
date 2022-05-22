import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showcounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increse(10));
  };

  const toggleCounterHandler = () => {

    dispatch(counterActions.toggle())
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
