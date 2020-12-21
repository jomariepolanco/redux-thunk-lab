// add the catsReducer

export default function catsReducer(state = {cats: [], loading: false}, action) {
    switch(action.type){
        case 'LOADING_CATS':
            return {
                ...state,
                cats: [...state.cats],
                loading: true
            }
        case 'ADD_CATS':
            return {
                ...state,
                cats: action.cats,
                loading: false
            }
        default:
            return state
    }
}
