import { IActionUnion, MakeAction } from ".";
import { AppEvents } from "../AppEvents";
import { CandidateModel } from "../models";


export const CandiateActionConstant = MakeAction<AppEvents.REGISTER_USER,CandidateModel>(AppEvents.REGISTER_USER);



export const CandidateAction={
    CandiateActionConstant
}


export type ICandidateActionsType = IActionUnion<typeof CandidateAction>;