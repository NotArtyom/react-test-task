import consts from '../../helpers/consts';

const initState = {
  children: {},
  fetching: false,
  fetched: false
};

const childrenReducer = (state = initState, action) => {
  switch (action.type) {
    case consts.RequestedChildren: {
      return {...state, fetching: true};
    }
    case consts.ReceivedChildren: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        children: action.payload.data
      };
    }
    case consts.RejectedChildren: {
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    }
    default: return state;
  }

};
export default childrenReducer