import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../schemas/login.schema";
import { SuperAdmin } from "../../schemas/login.schema";

const initialState: AuthState = {
  super_admin: null,
  access_token: null,
  refresh_token: null
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SuperAdmin | null>) => {
      state.super_admin = action.payload;
    },

    setToken: (state, action: PayloadAction<string | null>) => {
      state.access_token = action.payload;
    },

    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refresh_token = action.payload
    },

    logoutUser: (state) => {
      state.super_admin = null;
      state.access_token = null;
    }
  }
})

export const { setUser, setToken, setRefreshToken, logoutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;