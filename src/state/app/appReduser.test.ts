import {
    AppDataType,
    appReducer,
    changeErrorMessageAC,
    changeStatusLoadingAC,
    getAuthCA,
    logoutUserAC
} from "./appReducer.ts";
import {StatusLoading} from "../type.ts";


let startState:AppDataType
beforeEach(()=>{

    startState = {
        statusLoading: StatusLoading.idle,
        errorMessage:null,
        isAuth:false,
        authUser:{
            id: null,
            email: null,
            login: null

        }
    }
})
test('correct change status loading', () => {
    const endState = appReducer(startState, changeStatusLoadingAC(StatusLoading.succeeded))
    expect(endState.statusLoading).toBe(StatusLoading.succeeded)
    expect(startState.statusLoading).toBe(StatusLoading.idle)
})

test('correct change error message', () => {
    const endState = appReducer(startState, changeErrorMessageAC("some error message"))
    expect(endState.errorMessage).toBe("some error message")
    expect(startState.errorMessage).toBe(null)
})

test('correct auth user', () => {
    const endState = appReducer(startState, getAuthCA({
        id: 2,
        email: "dibabiak@gmail.com",
        login: "Dziana_Babiak"
    }))
    expect(endState.isAuth).toBe(true)
    expect(startState.isAuth).toBe(false)
    expect(endState.authUser.email).toBe("dibabiak@gmail.com")
    expect(endState.authUser.login).toBe("Dziana_Babiak")
    expect(endState.authUser.id).toBe(2)
})

test('correct logout auth user', () => {
    const endState = appReducer(startState, logoutUserAC())
    expect(endState.isAuth).toBe(false)
    expect(endState.authUser.email).toBe(null)
    expect(endState.authUser.login).toBe(null)
    expect(endState.authUser.id).toBe(null)
})