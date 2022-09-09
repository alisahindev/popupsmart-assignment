import { IGlobalContext } from "src/context/interfaces";

const ActionType = {
  SET_LOADING: "SET_LOADING",
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
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
    default:
      return state;
  }
}
