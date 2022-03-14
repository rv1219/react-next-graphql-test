import React, { useContext, useReducer } from "react";
import { IGlobalState } from "../interfaces";
import * as ACTIONS from "./action";

const initState: IGlobalState = {
  tableDataList: []
};

const reducer = (state: IGlobalState, action: any): IGlobalState => {
  switch (action.type) {
    case ACTIONS.SET_PAGE:
      return { ...state };
    case ACTIONS.SET_API_DATA:
      return {
        ...state,
        tableDataList: action?.launchesPast || [],
      };
    default:
      return state;
  }
};
const GlobalStateContext = React.createContext<IGlobalState>(initState);
const GlobalDispatchContext = React.createContext<any>(null);

export const GlobalProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
