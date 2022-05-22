import { createStore } from 'redux';

const initialState = { counter : 0, showcounter: true }

const countReducer = (state = initialState, action) => {
    if(action.type === 'increment') {
        return {
            counter : state.counter + 1,
            showcounter : state.showcounter
        };
        
    }
    if(action.type === 'decrement') {
        return {
          counter : state.counter - 1,
          showcounter : state.showcounter
        } ;
    }
    if(action.type === 'increse') {
        return {
            counter : state.counter + action.ammount,
            showcounter : state.showcounter
        }
    }
    if(action.type === 'toggle') {
        return {
            showcounter : !state.showcounter,
            counter: state.counter
        }
    }
    return state;
}

const store = createStore(countReducer);

export default  store;



