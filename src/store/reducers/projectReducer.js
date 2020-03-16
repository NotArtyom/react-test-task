import consts from '../../helpers/consts'

const initState = {
  projects: {},
  fetching: false,
  fetched: false
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case consts.RequestedProject: {
      return {...state, fetching: true};
    }
    case consts.ReceivedProject: {
      console.log(action.payload.data);
      return {
        ...state,
        fetching: false,
        fetched: true,
        projects: action.payload.data
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
