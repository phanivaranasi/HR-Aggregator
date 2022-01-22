import { combineReducers } from "redux";
import { CandidateReducer } from "./candidate.reducer";




export const AppReducer = combineReducers({
    Candidate: CandidateReducer
});

