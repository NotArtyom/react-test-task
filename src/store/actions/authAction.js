export const signIn = ({login, pass}) => (dispatch) => {

  dispatch({
    type: 'requested'
  });

  console.log(login,pass);

  fetch('https://cdsapi.netimob.com/api/auth', { method : 'POST',headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify({login: login, password: pass, type: 'web'}) })
    .then(data => {return data.json()})
    .then((data)=>{ localStorage.setItem('Access Token', data.data.accessToken); console.log(data);
    dispatch({
      type: 'received',
      payload: data
    });
  }).catch(err => {
    dispatch({
      type: 'rejected',
      payload: err
    });
  })
};
