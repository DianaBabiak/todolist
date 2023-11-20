import {TodolistType} from "../propsType.ts";

export interface ActionType {
    type: string
    [key:string]:any
}
export const todolistReducer = (state:TodolistType[], action:ActionType):TodolistType[]=>{
    switch (action.type){
        case "mmm":return state





        default: throw new Error ("I don/'t know this type")
    }






}