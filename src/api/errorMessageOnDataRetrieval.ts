import axios from "axios";
import {changeErrorMessageAC} from "../state/app/appReducer.ts";
import {Dispatch} from "redux";


export const errorMessageOnDataRetrieval= (error:unknown, dispatch:Dispatch)=>{
    if (axios.isAxiosError(error)) {
        console.log('err getTask', error)
        dispatch(changeErrorMessageAC(error.response?.data?.message || 'An error occurred'));
    } else {
        console.log('err getTask', error);
        dispatch(changeErrorMessageAC('An error occurred'));
    }
}