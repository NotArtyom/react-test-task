import consts from '../../helpers/consts';

export const getStructure = ({projectId,root_structure_id}) => (dispatch) =>{
  dispatch({
    type: consts.RequestedProjectStructure
  });
  let url =  'https://cdsapi.netimob.com/api/project/' + projectId.toString() + '/project-structure/'+root_structure_id.toString();
  fetch(url, { method : 'GET',headers: {
      'Content-Type': 'application/json',
      'Access-Token': localStorage.getItem('Access Token')
    }})
    .then(data => {return data.json()})
    .then((data)=>{console.log(data);
      dispatch({
        type: consts.ReceivedProjectStructure,
        payload: data});
    }).catch(err => {
    dispatch({
      type: consts.RejectedProjectStructure,
      payload: err
    });
  });
};