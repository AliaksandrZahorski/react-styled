import { BASE_URL } from "../api/url";

export const GET_DATA = "GET_DATA";
export const GET_CURRENT = "GET_CURRENT";

export const getDataSuccess = (data: any) => ({
  type: GET_DATA,
  payload: data
});

export const getData = () => (dispatch: Function) => {
  fetch(`${BASE_URL}`)
    .then(response => response.json())
    .then(json => {
      dispatch(getDataSuccess(json));
    });
};

export const getCurrentRecord = (id: number) => ({
  type: GET_CURRENT,
  payload: id
});
