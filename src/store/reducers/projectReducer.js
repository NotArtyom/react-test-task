import consts from '../../helpers/consts'

const initState = {
  project: {},
  fetching: false,
  fetched: false
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case consts.RequestedProject: {
      return {...state, fetching: true};
    }
    case consts.ReceivedProject: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        project: action.payload
      };
    }
    case consts.RejectedProject: {
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    }
    default: return state;
  }

};
export default projectReducer
