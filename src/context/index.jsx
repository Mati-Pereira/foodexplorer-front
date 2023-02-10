import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  isAdmin: false,
};

const AppContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true };
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
