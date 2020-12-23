import axios from 'axios'
export const increment = () => {
    return {
        type: "INCREMENT"
    };
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    };
}

const fetchCategoryRequest = () => {
    return {
        type: "FETCH_CATEGORY_REQUEST"
    }
}

const fetchCategorySuccess = (categories) => {
    return {
        type: "FETCH_CATEGORY_SUCCESS",
        payload: categories,
    }
}
const fetchCategoryError = (error) => {
    return {
        type: "FETCH_CATEGORY_ERROR",
        payload: error,
    }
}

export const loadCategories = () => {
    return (dispatch) => {
        dispatch(fetchCategoryRequest);
        const url = `http://localhost:5000/api/categories`
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                dispatch(fetchCategorySuccess(response.data.data));
            }).catch((error) => {
                dispatch(fetchCategoryError(error));
            })
    }
}


const fetchProductRequest = () => {
    return {
        type: "FETCH_CATEGORY_REQUEST"
    }
}

const fetchProductSuccess = (categories) => {
    return {
        type: "FETCH_CATEGORY_SUCCESS",
        payload: categories,
    }
}
const fetchProductError = (error) => {
    return {
        type: "FETCH_CATEGORY_ERROR",
        payload: error,
    }
}

export const loadProducts = () => {
    return (dispatch) => {
        dispatch(fetchCategoryRequest);
        const url = `http://localhost:5000/api/categories`
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                dispatch(fetchCategorySuccess(response.data.data));
            }).catch((error) => {
                dispatch(fetchCategoryError(error));
            })
    }
}