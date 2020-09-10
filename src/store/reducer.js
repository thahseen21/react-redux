const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DEC') {
    return {
      counter: state.counter - 1,
    };
  }
  if (action.type === 'ADD') {
    return {
      counter: state.counter + action.value,
    };
  }
  if (action.type === 'SUB') {
    return {
      counter: state.counter - action.value,
    };
  }
  return state;
};

export default reducer;
