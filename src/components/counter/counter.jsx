import Button from "../button/button";
import { incrementCounter,decrementCounter } from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";


const Counter = () => {
    // global state
    const counterGlobalValue = useSelector(state => state.counterStore.counter)
    // console.log(counterGlobalValue);
    
    // dispatch action hook 
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementCounter(5));
    }

    const decrement = () => {
        dispatch(decrementCounter(5));
    }

    return (
        <div className="text-bg-dark text-center">
            <Button text="increment" functionName={increment}></Button>
            <span>{counterGlobalValue}</span>
            <Button text="decrement" functionName={decrement}></Button>
        </div>
    );
};
export default Counter;
