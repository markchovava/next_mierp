"use client";

export const RoleInit = (RoleInitialState) => {
    const result = {
        ...RoleInitialState, 
        items: null,
        prevURL: '',
        nextURL: '',
        total: null,
    }
    return result;
}


export const RoleInitialState = {
    items: null,
    prevURL: '',
    nextURL: '',
    total: null,
};


export const RoleReducer = (state, action) => {
    switch(action.type){
        case 'ADD_DATA':
            return {
                ...state,
                items: action.payload.items,
                nextURL: action.payload.nextURL,
                prevURL: action.payload.prevURL,
                total: action.payload.total,

            }    
        case 'ADD_ITEMS':
            return {
                ...state,
                items: action.payload
            }    
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload ]
            } 
        case 'ADD_NEXTURL':
            return {
                ...state,
                nextURL: action.payload.url
            }   
        case 'ADD_PREVURL':
            return {
                ...state,
                prevURL: action.payload.url
            }   
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.payload.id),
            }
        case 'EMPTY_ITEMS':
            return {
                ...state,
                items: [],
            }  
        default:
           return state;
    }
}