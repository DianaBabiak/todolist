import {
  changeErrorMessageAC,
  changeStatusLoadingAC,
} from "../state/app/appReducer.ts";
import { StatusLoading } from "../state/type.ts";
import { Dispatch } from "redux";
import { CommonAPIType } from "./commonAPI.ts";

export const errorWithStatus200 = (
  result: CommonAPIType,
  dispatch: Dispatch,
) => {
  if (result.messages.length) {
    dispatch(changeErrorMessageAC({ errorMessage: result.messages[0] }));
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.failed }));
    return result.messages[0];
  } else {
    dispatch(changeErrorMessageAC({ errorMessage: "Some error" }));
    dispatch(changeStatusLoadingAC({ statusLoading: StatusLoading.failed }));
    return "Some error";
  }
};
