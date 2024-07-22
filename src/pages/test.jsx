import { useDispatch, useSelector } from "react-redux";
import { addByPayload, decrement, increment } from "../redux/reducers/countSlice";
import Button from "../components/elements/Button";

const Test = () => {
  const counterData = useSelector(state => state.countSlice);
  const dispatch = useDispatch();

  return ( 
    <>
      <p>nama: {counterData.count}</p>
      <div className="flex gap-4">
        <Button onClick={() => dispatch(increment())}>increment</Button> 
        <Button onClick={() => dispatch(decrement())}>decrement</Button> 
        <Button onClick={() => dispatch(addByPayload(10))}>addByPayload</Button> 
      </div>
    </>
   );
}
 
export default Test;