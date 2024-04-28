import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../state/store.ts";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  rejectValue: string;
  dispatch: AppDispatch;
  state: RootState;
}>();
