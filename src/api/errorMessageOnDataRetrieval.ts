import axios from "axios";
import { changeErrorMessageAC } from "../state/app/appReducer.ts";
import { Dispatch } from "redux";

export const errorMessageOnDataRetrieval = (
  error: unknown,
  dispatch: Dispatch,
) => {
  if (axios.isAxiosError<ErrorType>(error)) {
    const err: string = error.response?.data
      ? error.response?.data.message
      : error.message;
    dispatch(
      changeErrorMessageAC({ errorMessage: err || "An error occurred" }),
    );
    return err || "An error occurred";
  } else {
    dispatch(
      changeErrorMessageAC({
        errorMessage: (error as Error).message || "An error occurred",
      }),
    );
    return (error as Error).message || "An error occurred";
  }
};

type ErrorType = {
  message: string;
};
