import  { useReducer } from 'react';
const initialState = { canvaWidth: null, canvaHeight: null, onloaded: false,fixCancasFlickering:false };

const useCommonUseReducer=()=>{

    const reducer = (state, action) => {
        switch (action.type) {
            case 'DRAW': return { ...state, canvaWidth: action.width, canvaHeight: action.height, onloaded: action.onloaded };
            case 'FIXFLICKERING': return{...state ,fixCancasFlickering:action.fixCancasFlickering}
            default: return state;
        }
    };
    const [data, dispatch] = useReducer(reducer, initialState);
    // dispatch(what);

    return [data,dispatch]
}

export default useCommonUseReducer;