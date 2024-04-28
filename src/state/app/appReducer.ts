import { StatusLoading } from "../type.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearTasksAndTodolists } from "../commonActions.ts";
import { AuthUserType, UserType } from "../../api/commonAPI.ts";
import { authAPI } from "../../api/authAPI.ts";
import { errorWithStatus200 } from "../../api/errorWithStatus200.ts";
import { errorMessageOnDataRetrieval } from "../../api/errorMessageOnDataRetrieval.ts";
import { createAppAsyncThunk } from "../../utils/createAppAsyncThunk.ts";

export interface AppDataType {
  statusLoading: StatusLoading;
  errorMessage: string | null;
  isAuth: boolean;
  authUser: AuthUserType;
  initialization: boolean;
}

const initialState: AppDataType = {
  statusLoading: StatusLoading.idle,
  errorMessage: null,
  isAuth: false,
  authUser: {
    id: null,
    email: null,
    login: null,
  },
  initialization: false,
};

export const getAuthTC = createAppAsyncThunk(
  "users/fetchByIdStatus",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await authAPI.getAuth();
      if (result.resultCode === 0) {
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        return result.data;
      }
      return thunkAPI.rejectWithValue(
        errorWithStatus200(result, thunkAPI.dispatch),
      );
    } catch (error: unknown) {
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.failed }),
      );
      return thunkAPI.rejectWithValue(
        errorMessageOnDataRetrieval(error, thunkAPI.dispatch),
      );
    } finally {
      thunkAPI.dispatch(initializationAppCA({ initialization: true }));
    }
  },
);

export const authorizationUserTC = createAppAsyncThunk(
  "users/authorizationUserTC",
  async (user: UserType, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await authAPI.postAuth(user);
      if (result.resultCode === 0) {
        thunkAPI.dispatch(getAuthTC());
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        return;
      }
      return thunkAPI.rejectWithValue(
        errorWithStatus200(result, thunkAPI.dispatch),
      );
    } catch (error: unknown) {
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.failed }),
      );
      return thunkAPI.rejectWithValue(
        errorMessageOnDataRetrieval(error, thunkAPI.dispatch),
      );
    }
  },
);

export const logoutUserTC = createAppAsyncThunk(
  "users/logoutUserTC",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(
      changeStatusLoadingAC({ statusLoading: StatusLoading.loading }),
    );
    try {
      const result = await authAPI.deleteAuth();
      if (result.resultCode === 0) {
        thunkAPI.dispatch(logoutUserAC());
        thunkAPI.dispatch(
          changeStatusLoadingAC({ statusLoading: StatusLoading.succeeded }),
        );
        thunkAPI.dispatch(clearTasksAndTodolists());
        return;
      }
      return thunkAPI.rejectWithValue(
        errorWithStatus200(result, thunkAPI.dispatch),
      );
    } catch (error: unknown) {
      thunkAPI.dispatch(
        changeStatusLoadingAC({ statusLoading: StatusLoading.failed }),
      );
      return thunkAPI.rejectWithValue(
        errorMessageOnDataRetrieval(error, thunkAPI.dispatch),
      );
    }
  },
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeStatusLoadingAC(
      state,
      action: PayloadAction<{ statusLoading: StatusLoading }>,
    ) {
      state.statusLoading = action.payload.statusLoading;
    },
    changeErrorMessageAC(
      state,
      action: PayloadAction<{ errorMessage: string | null }>,
    ) {
      state.errorMessage = action.payload.errorMessage;
    },
    logoutUserAC(state) {
      state.isAuth = false;
      state.authUser = { id: null, email: null, login: null };
    },
    initializationAppCA(
      state,
      action: PayloadAction<{ initialization: boolean }>,
    ) {
      state.initialization = action.payload.initialization;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthTC.fulfilled, (state, action) => {
      state.isAuth = true;
      state.authUser = action.payload as AuthUserType;
    });
  },
});
export const appReducer = appSlice.reducer;
export const {
  changeStatusLoadingAC,
  changeErrorMessageAC,
  logoutUserAC,
  initializationAppCA,
} = appSlice.actions;
