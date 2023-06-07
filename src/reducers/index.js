import {SET_SEARCH, SET_REGION, SET_ALL, TOGGLE_DARK} from '../actions/index.js'

const initialState = {
    allCountries : [],
    searchField : '',
    filterRegion : '',
    darkMode : false
}

export const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_ALL : 
            return {...state, allCountries : action.payload};
        case TOGGLE_DARK : 
            return {...state, darkMode : !state.darkMode};
        case SET_REGION : 
            return {...state, filterRegion : action.payload};
        case SET_SEARCH : 
            return {...state, searchField : action.payload};
        default :
            return {...state}
    }
}