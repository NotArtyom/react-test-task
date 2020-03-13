import consts from '../../helpers/consts';

export const getProject = () => (dispatch) =>{

  dispatch({
    type: consts.RequestedProject
  });

  fetch('https://cdsapi.netimob.com/api/project', { method : 'GET',headers: {
      'Content-Type': 'application/json',
      'Access-Token': localStorage.getItem('Access Token')
    }})

    .then(data => {return data.json()})
    .then((data)=>{console.log(data);
      dispatch({
        type: consts.ReceivedProject,
        payload: data});
  }).catch(err => {
    dispatch({
      type: consts.RejectedProject,
      payload: err
    });
  });
};