import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import { api } from "../services/api";

const initialState = {
  isAdmin: false,
  isLoggedIn: false,
  username: "",
  email: "",
  password: "",
};

const AppContext = createContext(initialState);

async function reducer(state, action) {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        username: action.username,
        email: action.email,
        password: action.password,
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
