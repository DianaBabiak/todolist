import {StatusLoading} from "../type.ts";


export type AppActionType = ChangeStatusLoadingACType | ChangeErrorMessageAC
export interface AppDataType{
    statusLoading: StatusLoading
    errorMessage:string | null
}

const initialState:AppDataType = {
    statusLoading: StatusLoading.idle,
    errorMessage: null
}

export const appReducer =(state:AppDataType= initialState, action:AppActionType):AppDataType=>{
    switch (action.type){
        case "CHANGE_STATUS_LOADING":{
            return {...state,statusLoading:action.payload.statusLoading}
        }
        case "CHANGE_ERROR_MESSAGE":{
            return {...state,errorMessage:action.payload.errorMessage}
        }
        default: return state
    }
}


export type ChangeStatusLoadingACType = ReturnType<typeof changeStatusLoadingAC>
export const changeStatusLoadingAC = (statusLoading: StatusLoading) => ({type: "CHANGE_STATUS_LOADING", payload: {statusLoading}} as const)

export type ChangeErrorMessageAC = ReturnType<typeof changeErrorMessageAC>
export const changeErrorMessageAC = (errorMessage:string | null) => ({type: "CHANGE_ERROR_MESSAGE", payload: {errorMessage}} as const)