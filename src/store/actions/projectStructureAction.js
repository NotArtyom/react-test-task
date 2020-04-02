import consts from '../../helpers/consts';

export const getStructure = ({projectId, root_structure_id}) => (dispatch) => {
  if(projectId && root_structure_id){
  dispatch({
    type: consts.RequestedProjectStructure
  });
  fetch('https://cdsapi.netimob.com/api/project/' + projectId.toString() + '/project-structure/' + root_structure_id.toString(), {
    method: 'GET', headers: {
      'Content-Type': 'application/json',
      'Access-Token': localStorage.getItem('Access Token')
    }
  })
    .then(data => {return data.json();})
    .then((data) => {console.log(data);
      dispatch({
        type: consts.ReceivedProjectStructure,
        payload: data
      });
    }).catch(err => {
    dispatch({
      type: consts.RejectedProjectStructure,
      payload: err
    });
  });}
};

export const getChildren = ({projectId, structureId}) => (dispatch) => {
  dispatch({
    type: consts.RequestedChildren
  });
  fetch('https://cdsapi.netimob.com/api/project/' + projectId.toString() + '/project-structure/' + structureId.toString(), {
    method: 'GET', headers: {
      'Content-Type': 'application/json',
      'Access-Token': localStorage.getItem('Access Token')
    }
  })
    .then(data => {return data.json();})
    .then((data) => {console.log(data);
      dispatch({
        type: consts.ReceivedChildren,
        payload: data
      });
    }).catch(err => {
    dispatch({
      type: consts.RejectedChildren,
      payload: err
    });
  });
};