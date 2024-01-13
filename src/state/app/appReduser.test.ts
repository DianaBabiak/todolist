import {AppDataType, appReducer, changeErrorMessageAC, changeStatusLoadingAC} from "./appReducer.ts";


let startState:AppDataType
beforeEach(()=>{

    startState = {
        statusLoading: "idle",
        errorMessage:null
    }
})
test('correct change status loading', () => {
    const endState = appReducer(startState, changeStatusLoadingAC("succeeded"))
    expect(endState.statusLoading).toBe("succeeded")
    expect(startState.statusLoading).toBe("idle")
})

test('correct change error message', () => {
    const endState = appReducer(startState, changeErrorMessageAC("some error message"))
    expect(endState.errorMessage).toBe("some error message")
    expect(startState.errorMessage).toBe(null)
})