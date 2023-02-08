import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const AppContext = createContext({});

const initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
  }
}

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
