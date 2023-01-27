import {createContext, useReducer} from 'react';
export const HomeViewContext = createContext();

const initializeState ={
    GRID_ROWS:""
};

// reducer
const reducer = (state,action) =>{

    switch(action.type){

        case 'SET_LOT_GRID_ROWS' :
            return {...state,GRID_ROWS:action.value};

        default:
        throw new Error("컨텍스트에 속성값이 없습니다.");
    }
}

// Context Hoc 
export const withContext =  WrappedComponent =>{

    const Component = (props) =>{
    const [context,dispatch] = useReducer(reducer,initializeState);
    return (

    <HomeViewContext.Provider value= {{context,dispatch}}>
    <WrappedComponent {...props}/>
    </HomeViewContext.Provider>);
    };

    return Component;
};