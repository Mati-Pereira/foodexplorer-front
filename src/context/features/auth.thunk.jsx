import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { access_token } = response.data;
      api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      return response.data;
    } catch (error) {
      if (error.response) {
        toast(error.response.data.message);
      } else {
        toast("Não foi possível entrar");
      }
      return thunkAPI.rejectWithValue({ error });
    }
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
      state.user = null;
      state.isAdmin = false;
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
