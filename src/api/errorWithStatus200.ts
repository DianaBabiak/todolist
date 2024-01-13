import {changeErrorMessageAC, changeStatusLoadingAC} from "../state/app/appReducer.ts";
import {StatusLoading} from "../state/type.ts";
import {Dispatch} from "redux";
import {CommonAPIType} from "./commonAPI.ts";

export const errorWithStatus200=(result:CommonAPIType,dispatch:Dispatch)=>{
    if( result.messages.length){
        dispatch(changeErrorMessageAC(result.messages[0]))
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    } else{
        dispatch(changeErrorMessageAC('Some error'))
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}