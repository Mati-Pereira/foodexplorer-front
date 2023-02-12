import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", { email, password });
      toast.success("Login realizado com sucesso!");
      const { access_token } = response.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      return response.data;
    } catch (error) {
      if (error.response) {
        return toast(error.response.data.message);
      } else {
        return toast(error.message);
      }
    }
  }
);

const initialState = {
  isAdmin: false,
  user: null,
  loading: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state) => {
      localStorage.clear();
      state.user = null;
      state.isAdmin = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isAdmin = Boolean(action.payload.is_admin);
      state.token = action.payload.access_token;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.loading = false;
      state.user = null;
      state.isAdmin = false;
    });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
