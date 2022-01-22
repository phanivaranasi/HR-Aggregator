import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { bindActionCreators } from 'redux';
import { CandidateAction } from '../action/candidate.action';
import { IAppState } from '../store';



const CandidateRegi: React.FC = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { CandiateActionConstant } = bindActionCreators(CandidateAction, dispatch);
    const state = useSelector((state: IAppState) => state.Candidate);

    return (
        <div className='border m-2 shadow-md'>

            <button onClick={() => CandiateActionConstant({ Email: new Date().toString() })}>New</button>
            {state.Email}
            <div>asdfss {id}
                asdf
            </div>
        </div>);
}


export default CandidateRegi;