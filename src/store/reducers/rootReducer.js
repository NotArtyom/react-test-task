import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import projectStructureReducer from './projectStructureReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  projectStructure: projectStructureReducer
});

export default rootReducer
