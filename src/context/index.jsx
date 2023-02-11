import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { api } from "../services/api";
import { toast } from "react-toastify";

const initialState = {
  isAdmin: false,
  user: null,
};

const AppContext = createContext(initialState);

async function reducer(state, action) {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload.user,
        isAdmin: action.payload.is_admin,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        isAdmin: false,
      };
  }
}

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const signIn = async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, is_admin, access_token } = response.data;
      localStorage.setItem(
        "@foodExplorer:user",
        JSON.stringify({ user, is_admin })
      );
      localStorage.setItem("@foodExplorer:token", access_token);
      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      dispatch({ type: "SIGN_IN", payload: response.data });
      toast("Login efetuado com sucesso");
    } catch (error) {
      if (error.response) {
        toast(error.response.data.message);
      } else {
        toast("Não foi possível entrar");
      }
    }
  };

  const signOut = () => {
    localStorage.removeItem("@foodExplorer:token");
    localStorage.removeItem("@foodExplorer:user");
    dispatch({ type: "SIGN_OUT" });
  };

  useEffect(() => {
    async () => {
      const token = localStorage.getItem("@foodExplorer:token");
      const user = localStorage.getItem("@foodExplorer:user");
      if (user && token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        dispatch({ type: "SIGN_IN", payload: user });
      }
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        signIn,
        signOut,
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
