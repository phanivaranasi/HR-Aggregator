import { createStore } from "redux";
import { AppReducer } from "./reducer";


export type IAppState = ReturnType<typeof AppReducer>;

export const AppStore = createStore(AppReducer);