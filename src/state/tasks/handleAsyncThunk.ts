import { AppDispatch, RootState } from "../store.ts";
import { changeStatusLoadingAC } from "../app/appReducer.ts";
import { StatusLoading } from "../type.ts";
import { errorMessageOnDataRetrieval } from "../../api/errorMessageOnDataRetrieval.ts";
import { CommonAPIType } from "../../api/commonAPI.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { BaseThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

export const thunkTryCatch = async <T>(
  thunkAPI: BaseThunkAPI<RootState, unknown, AppDispatch, null | CommonAPIType>,
  logic: () => Promise<T>,
): Promise<T | ReturnType<typeof thunkAPI.rejectWithValue>> => {
  const { dispatch, rejectWithValue } = thunkAPI;
  dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.loading }));
  try {
    return await logic();
  } catch (error) {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.failed }));
    return rejectWithValue(errorMessageOnDataRetrieval(error, dispatch));
  } finally {
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.idle }));
  }
};
