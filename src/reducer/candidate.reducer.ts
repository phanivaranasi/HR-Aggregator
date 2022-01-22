import { ICandidateActionsType } from "../action/candidate.action";
import { AppEvents } from "../AppEvents";
import { CandidateModel } from "../models";


const InitialCandiateState: CandidateModel = {
    Email: ''
}


export const CandidateReducer = (state: CandidateModel = InitialCandiateState, action: ICandidateActionsType): CandidateModel => {
    console.log("candidate reduer",state,action);
    if (state === undefined)
        return InitialCandiateState;
    switch (action.type) {
        case AppEvents.REGISTER_USER:
            return {
                ...state,
                Email: action.payload.Email
            };
        default:
            return state;
    }
}