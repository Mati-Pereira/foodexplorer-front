import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const AppContext = createContext(initialState);

const initialState = {
  isAdmin: false,
  isLoggedIn: false,
};

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
