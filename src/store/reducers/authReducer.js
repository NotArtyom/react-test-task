const initState = {
  fetching: false,
  fetched: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'requested': {
      return {...state, fetching: true};
    }
    case 'received': {
      return {
        ...state,
        fetching: false,
        fetched: true,
      };
    }
    case 'rejected': {
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    }
  }
  return state;

};
export default authReducer;