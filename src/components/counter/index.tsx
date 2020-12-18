/** @format */

import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import {
	decrement,
	increment,
	incrementByAmount,
	// incrementAsync,
	// selectCount,
	// } from "../../redux/features/counter/counterSlice";
} from "../../redux/actions/counter";
import { getCount } from "../../redux/selectors/counter";
import styles from "./styles.scss";

const Counter = (): JSX.Element => {
	const count = useSelector(getCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState("2");

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label='Increment value'
					onClick={() => {
						console.log("increment");
						dispatch(increment());
					}}
				>
					+
				</button>
				<span className={styles.value}>{count}</span>
				<button
					className={styles.button}
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(e) => setIncrementAmount(e.target.value)}
				/>
				<button
					className={styles.button}
					onClick={() =>
						dispatch(
							incrementByAmount(Number(incrementAmount) || 0),
						)
					}
				>
					Add Amount
				</button>
				<button
					className={styles.asyncButton}
					// onClick={() =>
					// 	// dispatch(incrementAsync(Number(incrementAmount) || 0))
					// }
				>
					Add Async
				</button>
			</div>
		</div>
	);
};

export default connect()(Counter);
