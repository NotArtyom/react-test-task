import consts from '../../helpers/consts'

const initState = {
  projectStructure: {},
  fetching: false,
  fetched: false
};
const projectStructureReducer = (state = initState, action) => {
  switch (action.type) {
    case consts.RequestedProjectStructure: {
      return {...state, fetching: true};
    }
    case consts.ReceivedProjectStructure: {
      console.log(action.payload.data);
      return {
        ...state,
        fetching: false,
        fetched: true,
        projectStructure: action.payload.data
      };
    }
    case consts.RejectedProjectStructure: {
      return {
        ...state,
        fetching: false,
        fetched: false,
      };
    }
    default: return state;
  }

};
export default projectStructureReducer
