 const SET_SEARCH = 'SET_SEARCH', SET_REGION = 'SET_REGION', SET_ALL = 'SET_ALL', TOGGLE_DARK = "SET_DARK";
 export {SET_SEARCH, SET_REGION, SET_ALL, TOGGLE_DARK};

 export const setSearch = (str) => {
    return {
        type : SET_SEARCH,
        payload : str
    }
 }

 export const setRegion = (region) => {
    return {
        type : SET_REGION,
        payload : region
    }
 }
 
 export const setAll = (data) => {
    return {
        type : SET_ALL,
        payload : data
    }
 }

 export const toggleDark = () => {
    return {
        type : TOGGLE_DARK
    }
 }