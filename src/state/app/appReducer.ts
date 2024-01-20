import {StatusLoading} from "../type.ts";
import {authAPI} from "../../api/authAPI.ts";
import {errorWithStatus200} from "../../api/errorWithStatus200.ts";
import {errorMessageOnDataRetrieval} from "../../api/errorMessageOnDataRetrieval.ts";
import {AppThunkResult} from "../store.ts";
import {AuthUserType, UserType} from "../../api/commonAPI.ts";


export type AppActionType = ChangeStatusLoadingACType | ChangeErrorMessageAC | GetAuthCA | LogoutUserAC


export interface AppDataType{
    statusLoading: StatusLoading
    errorMessage:string | null
    isAuth:boolean
    authUser:AuthUserType
}

const initialState:AppDataType = {
    statusLoading: StatusLoading.idle,
    errorMessage: null,
    isAuth:false,
    authUser:{
        id: null,
        email: null,
        login: null

    }
}

export const appReducer =(state:AppDataType= initialState, action:AppActionType):AppDataType=>{
    switch (action.type){
        case "CHANGE_STATUS_LOADING":{
            return {...state,statusLoading:action.payload.statusLoading}
        }
        case "CHANGE_ERROR_MESSAGE":{
            return {...state,errorMessage:action.payload.errorMessage}
        }
        case "GET_AUTH_USER":{
            return {...state, isAuth:true, authUser: action.payload.user}
        }
        case "LOGOUT_AUTH_USER":{
            return {...state,isAuth:false, authUser:{id:null, email:null,login:null}}
        }

        default: return state
    }
}


export type ChangeStatusLoadingACType = ReturnType<typeof changeStatusLoadingAC>
export const changeStatusLoadingAC = (statusLoading: StatusLoading) => ({type: "CHANGE_STATUS_LOADING", payload: {statusLoading}} as const)

export type ChangeErrorMessageAC = ReturnType<typeof changeErrorMessageAC>
export const changeErrorMessageAC = (errorMessage:string | null) => ({type: "CHANGE_ERROR_MESSAGE", payload: {errorMessage}} as const)

export type GetAuthCA = ReturnType<typeof getAuthCA>
export const getAuthCA = (user:AuthUserType) => ({type: "GET_AUTH_USER", payload: {user}} as const)

export type LogoutUserAC = ReturnType<typeof logoutUserAC>
export const logoutUserAC = () => ({type: "LOGOUT_AUTH_USER"} as const)



export const getAuthTC = ():AppThunkResult=>async (dispatch)=>{
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await authAPI.getAuth()
        if (result.resultCode === 0) {
            dispatch(getAuthCA(result.data))
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
            return
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error,dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}

export const authorizationUserTC = (user:UserType):AppThunkResult=>async (dispatch)=>{
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await authAPI.postAuth(user)
        if (result.resultCode === 0) {
            dispatch(getAuthTC())
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
            return
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error,dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}

export const logoutUserTC = ():AppThunkResult=>async (dispatch)=>{
    dispatch(changeStatusLoadingAC(StatusLoading.loading))
    try {
        const result = await authAPI.deleteAuth()
        if (result.resultCode === 0) {
            dispatch(logoutUserAC())
            dispatch(changeStatusLoadingAC(StatusLoading.succeeded))
            return
        }
        errorWithStatus200(result,dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error,dispatch)
        dispatch(changeStatusLoadingAC(StatusLoading.failed))
    }
}
