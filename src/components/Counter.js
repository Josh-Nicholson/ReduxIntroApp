import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector((state) => state.counter.counterValue);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counterValue}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
