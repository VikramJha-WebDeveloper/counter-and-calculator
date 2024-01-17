//Reducer for counter
export let changeTheNumber = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + action.payload };
    case "DECREMENT":
      return { counter: state.counter - action.payload };
    default:
      return state;
  }
};

// Reducer for calculator
export let calculate = (state = "", action) => {
  switch (action.type) {
    case "FILL NUMBER":
      return state + action.payload;
    case "CALCULATIONS":
      switch (action.payload) {
        case "%":
          return eval(state) * 100;
        default:
          return state + action.payload;
      }
    case "CLEAREQUALBACKSPACE":
      switch (action.payload) {
        case "=":
          return eval(state);
        case "Clear":
          return "";
        case "←":
          return state.slice(0, -1);
        default:
          return state;
      }
    default:
      return state;
  }
};
