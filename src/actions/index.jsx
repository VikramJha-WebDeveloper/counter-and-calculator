// Actions for Counter
export let increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export let decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

//Actions for calculator
export let fillNumber = (val) => {
  return {
    type: "FILL NUMBER",
    payload: val,
  };
};

export let calculations = (val) => {
  return {
    type: "CALCULATIONS",
    payload: val,
  };
};

export let clearEqualBackSpace = (val) => {
  return {
    type: "CLEAREQUALBACKSPACE",
    payload: val,
  };
};
