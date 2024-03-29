
import {uiActions} from '../slices/ui-slice'
const httpAction = (data) => async (dispatch) => {
  dispatch(uiActions.startLoading());
  dispatch(uiActions.sendStatus(null))

  try {
    const response = await fetch(data.url, {
      method: data.method ? data.method : "GET",
      body: data.body ? JSON.stringify(data.body) : null,
      headers: data.token
        ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${data.token}`,
            "Access-Control-Allow-Origin": "*", 
          }
        : { 
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", 
          },
    });

    const resData = await response.json();
   
    dispatch(uiActions.sendStatus(response.status))
    if (!response.ok) {
      throw new Error(resData.message);
    }

    return resData;
  } catch (error) {
    if(error.message === 'Failed to fetch'){
      dispatch(uiActions.showError('something went wrong try again!'))
    }else{
      dispatch(uiActions.showError(error.message));
    }
  } finally {
    dispatch(uiActions.stopLoading());
  }
};

export default httpAction;
