import { AppEvents } from "../AppEvents";



export const MakeAction = <T extends AppEvents, P>(type: T) => (payload: P) => {
    return {
        type,
        payload
    }
}


export interface ActionModel<T> {
    [key: string]: T
}


export type IAnyFunction = (...args: any[])=>any;

export type IActionUnion<A extends ActionModel<IAnyFunction>> = ReturnType<A[keyof A]>;