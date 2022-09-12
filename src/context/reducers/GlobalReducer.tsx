import { IGlobalContext } from "src/context/interfaces";

const ActionType = {
  SET_LOADING: "SET_LOADING",
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
  SET_FORM_DATA: "SET_FORM_DATA",
  SET_ERROR: "SET_ERROR",
};

export default function GlobalReducer(
  state: IGlobalContext,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionType.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case ActionType.SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    case ActionType.SET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
}
