import {useState} from 'react';

export const InitializeState = {
    News: [{ "Column1": "", "Column2": "" }],
    QA: [{ "Column1": "", "Column2": "" }],
    Session: {},
}

export function useCombineState(initializeState){
    const [state1,setState1] =useState(initializeState.state1);
    const [state2,setState2] =useState(initializeState.state2);

    const setters = {
        setState1,
        setState2,
    }

    const getters = {
        state1,
        state2,
    }

    const get = (e)=>{
        return getters[e];
    }

    const set = (setName,v)=>{
        setters[setName](v);
    }

    return {get,set};
}