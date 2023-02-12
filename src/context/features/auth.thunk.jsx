import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    const response = await api
      .post("/sessions", { email, password })
      .then(() => {
        toast.success("Login realizado com sucesso!");
      })
      .catch((error) => {
        if (error.response) {
          return toast(error.response.data.message);
        } else {
          return toast(error.message);
        }
      });
    const { access_token } = response.data;
    localStorage.setItem("access_token", access_token);
    api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    return toast(response.data.message);
  }
);

const initialState = {
  isAdmin: false,
  user: null,
  loading: false,
  error: null,
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
      state.isAdmin = action.payload.is_admin;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
