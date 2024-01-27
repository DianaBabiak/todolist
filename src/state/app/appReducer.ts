import {StatusLoading} from "../type.ts";
import {authAPI} from "../../api/authAPI.ts";
import {errorWithStatus200} from "../../api/errorWithStatus200.ts";
import {errorMessageOnDataRetrieval} from "../../api/errorMessageOnDataRetrieval.ts";
import {AppThunkResult} from "../store.ts";
import {AuthUserType, UserType} from "../../api/commonAPI.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {clearTasksAndTodolists} from "../commonActions.ts";

export interface AppDataType {
    statusLoading: StatusLoading
    errorMessage: string | null
    isAuth: boolean
    authUser: AuthUserType
    initialization: boolean
}

const initialState: AppDataType = {
    statusLoading: StatusLoading.idle,
    errorMessage: null,
    isAuth: false,
    authUser: {
        id: null,
        email: null,
        login: null
    },
    initialization: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeStatusLoadingAC(state, action: PayloadAction<{ statusLoading: StatusLoading }>) {
            state.statusLoading = action.payload.statusLoading
        },
        changeErrorMessageAC(state, action: PayloadAction<{ errorMessage: string | null }>) {
            state.errorMessage = action.payload.errorMessage
        },
        getAuthCA(state, action: PayloadAction<{ user: AuthUserType }>) {
            state.isAuth = true
            state.authUser = action.payload.user
        },
        logoutUserAC(state) {
            state.isAuth = false
            state.authUser = {id: null, email: null, login: null}
        },
        initializationAppCA(state, action: PayloadAction<{ initialization: boolean }>) {
            state.initialization = action.payload.initialization
        },


    }
})
export const appReducer = appSlice.reducer
export const {
    changeStatusLoadingAC,
    changeErrorMessageAC,
    getAuthCA,
    logoutUserAC,
    initializationAppCA
} = appSlice.actions

export const getAuthTC = (): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.loading}))
    try {
        const result = await authAPI.getAuth()
        if (result.resultCode === 0) {
            dispatch(getAuthCA({user:result.data}))
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    } finally {
        dispatch(initializationAppCA({initialization:true}))
    }
}

export const authorizationUserTC = (user: UserType): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.loading}))
    try {
        const result = await authAPI.postAuth(user)
        if (result.resultCode === 0) {
            dispatch(getAuthTC())
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}

export const logoutUserTC = (): AppThunkResult => async (dispatch) => {
    dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.loading}))
    try {
        const result = await authAPI.deleteAuth()
        if (result.resultCode === 0) {
            dispatch(logoutUserAC())
            dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.succeeded}))
            dispatch(clearTasksAndTodolists())
            return
        }
        errorWithStatus200(result, dispatch)
    } catch (error: unknown) {
        errorMessageOnDataRetrieval(error, dispatch)
        dispatch(changeStatusLoadingAC({statusLoading:StatusLoading.failed}))
    }
}
