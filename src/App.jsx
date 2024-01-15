import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  fillNumber,
  calculations,
  clearEqualBackSpace,
} from "./actions";
function App() {
  let myState = useSelector((state) => state.changeTheNumber);
  let inputValue = useSelector((state) => state.calculate);
  let dispatch = useDispatch();

  let buttons = {
    numButtons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "00", "."],
    calculations: ["+", "-", "*", "/", "%"],
    otherButtons: ["Clear", "=", "←"],
  };
  return (
    <div className="w-100 bg-primary">
      <div className="container">
        <div className=" vh-100 row align-items-center justify-content-center flex-column">
          <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4">
            <div className="card bg-warning">
              <div className="card-body d-flex">
                <button
                  className="btn btn-dark"
                  onClick={() => dispatch(decrement(5))}
                >
                  Decrement
                </button>
                <input
                  type="text"
                  className="form-control mx-3 text-center"
                  value={myState}
                ></input>
                <button
                  className="btn btn-dark"
                  onClick={() => dispatch(increment(5))}
                >
                  Increment
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-9 col-md-7 col-lg-5 col-xl-4 mt-3">
            <div className="card bg-dark">
              <div className="card-body">
                <input
                  type="text"
                  className="form-control"
                  value={inputValue}
                ></input>
                <div className="row align-items-center bg-light mt-3 rounded m-0">
                  {buttons.otherButtons.map((item, index) => (
                    <div key={index} className="col-4 p-0 text-center">
                      <button
                        className="btn btn-danger w-75 my-2"
                        onClick={() => dispatch(clearEqualBackSpace(item))}
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                  {buttons.numButtons.map((item, index) => (
                    <div key={index} className="col-4 p-0 text-center">
                      <button
                        className="btn btn-dark w-75 my-2"
                        onClick={() => dispatch(fillNumber(item))}
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                  {buttons.calculations.map((item, index) => (
                    <div key={index} className="col-4 p-0 text-center">
                      <button
                        className="btn btn-warning w-75 my-2"
                        onClick={() => dispatch(calculations(item))}
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
