const categoryReducer = (state = {
    data: [],
    loading: true,
}, action) => {
    switch(action.type){
        case "FETCH_CATEGORY_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "FETCH_CATEGORY_SUCCESS":
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        case "FETCH_CATEGORY_ERROR":
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer;