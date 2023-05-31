import { configureStore, combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { unAuthenticatedMiddleware } from "./middleware/unAuthenticatedMiddleware";
import { authReducer, authSlice } from "./slices/authSlice";
import { searchReducer, searchSlice } from "./slices/searchSlice";
import { RESET_STATE_ACTION_TYPE } from "./actions/resetStateAction";
import { AUTH_TOKEN } from "../constants/AuthConstant";
import { authApi, AUTH_API_REDUCER_KEY } from "../services/auth/authApi";
import { superAdminApi, SUPER_ADMIN_API_REDUCER_KEY } from "../services/super-admin/superAdmin";

const reducers = {
  [searchSlice.name]: searchReducer,
  [authSlice.name]: authReducer,
  [AUTH_API_REDUCER_KEY]: authApi.reducer,
  [SUPER_ADMIN_API_REDUCER_KEY]: superAdminApi.reducer,
}

const combinedReducer = combineReducers<typeof reducers>(reducers);

const persistConfig = {
  key: "root",
  storage: storage
};

export const rootReducer: Reducer = persistReducer(persistConfig, (state: RootState, action: AnyAction) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    localStorage.removeItem(AUTH_TOKEN);
    state = {} as RootState;
  }

  return combinedReducer(state, action);
});

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat([
    unAuthenticatedMiddleware,
    authApi.middleware,
    superAdminApi.middleware,
  ])
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;