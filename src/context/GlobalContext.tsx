import { useReducer } from "react";
import { createContext, useContext } from "react";
import { IGlobalContext } from "./interfaces";
import GlobalReducer from "./reducers/GlobalReducer";

export const GlobalContext = createContext(undefined);

const initialState: IGlobalContext = {
  loading: false,
  isError: false,
  isModalOpen: false,
};

const GlobalProvider = ({ children }: any): JSX.Element => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setLoading = (loading: boolean) => {
    dispatch({
      type: "SET_LOADING",
      payload: loading,
    });
  };

  const setModalOpen = (isOpen: boolean) => {
    dispatch({
      type: "SET_MODAL_OPEN",
      payload: isOpen,
    });
  };

  const value: any = {
    ...state,
    setLoading,
    setModalOpen,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useGlobal Context must be used within a GlobalContext");
  }

  return context;
};

export default GlobalProvider;
