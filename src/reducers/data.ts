import { GET_DATA, GET_CURRENT } from "../actions";

type StateType = {
  data: any;
  current: Object;
  message: string;
};

const initialState: StateType = {
  data: [],
  current: {},
  message: ""
};

type actionType = { type: string; payload: any };

export const data = (state: StateType = initialState, action: actionType) => {
  switch (action.type) {
    // case ADD_RECORD:
    //   return [
    //     ...state,
    //     {
    //       _id: action._id,
    //       author: action.author,
    //       title: action.title,
    //       text: action.text,
    //     }
    //   ];
    case GET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case GET_CURRENT:
      return {
        ...state,
        current: state.data.find((_: any) => _.id === action.payload)
      };
    // case DELETE_RECORD:
    //   return state.filter(s => s._id !== action.id);

    default:
      return state;
  }
};
