import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const CounterPage = () => {
  const dispatch = useDispatch();
  const handleAdd1BtnClick = () => {
    dispatch(counterActions.add1());
  };
  const handleAdd5BtnClick = () => {
    dispatch(counterActions.add5());
  };
  const handleAddNumberBtnClick = () => {
    dispatch(counterActions.addNumber(12));
  };
  const handleSub1BtnClick = () => {
    dispatch(counterActions.sub1());
  };
  const handleSub5BtnClick = () => {
    dispatch(counterActions.sub5());
  };
  const handleSubNumberBtnClick = () => {
    dispatch(counterActions.subNumber(12));
  };
  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputGroup1"
            placeholder="Counter"
          />
          <label htmlFor="floatingInputGroup1">Counter</label>
        </div>
      </div>
      <br />
      <button className="btn btn-info" onClick={handleAdd1BtnClick}>+1</button>
      <button className="btn btn-info" onClick={handleAdd5BtnClick}>+5</button>
      <button className="btn btn-info" onClick={handleSub1BtnClick}>-1</button>
      <button className="btn btn-info" onClick={handleSub5BtnClick}>-5</button>
      <button className="btn btn-primary" onClick={handleAddNumberBtnClick}>Add</button>
      <button className="btn btn-primary" onClick={handleSubNumberBtnClick}>Sub</button>
    </div>
  );
};

export default CounterPage;