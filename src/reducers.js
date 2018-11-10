import {INCREMENT, DECREMENT} from "./actionTypes";

//Reducers

export const counterOperation  = (state = {count: 0}, action )=> {
    switch (action.type) {
        case INCREMENT : {
            return {count: state.count + 1};
        }
        case DECREMENT : {
            return {count: state.count - 1};
        }
        default : return state;
    }
}
