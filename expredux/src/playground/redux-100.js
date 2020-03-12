// 
import {createStore} from 'redux'

const store = createStore((state = {count:0}, action)=>{
    switch (action.type){
        case 'INCREMENT':

        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1
        return{
                count:state.count + incrementBy
            }
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1
                return{
                    count: state.count - decrementBy
                }
                case 'RESET':
                    return {
                        count:0
                    }
                    case 'SET':
                        return{
                            count: action.count
                        }
                
            default:
                return state
    }
})
store.subscribe ((()=>{
    console.log(store.getState())
}))


//Action ->an object that gets sent to the store
// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 5
//})
// Action creator - function that return action objects
const incrementCount = ({incrementBy = 1}= {})=>{
    return {
        type:'INREMENT',
        incrementBy
    }
}
const incrementCount = (payload = {})=>{
    return {
        type: 'INCREMENT',
        incrementBy:typeof payload.incrementBy === 'number' ? payload.incrementBy:1
    }
}
const setCount = (payload)=>{
    return{
        type:'SET',
        count:payload.count
    }
}

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount())
// store.dispatch({
//     type:'INCREMENT'
// })
store.dispatch({
    type:'RESET'
})
store.dispatch({
    type:'DECREMENT'
})
store.dispatch({
    type:'DECREMENT'
    
})
store.dispatch({
    type:'DECREMENT',
    decrementBy :10
})
store.dispatch({
    type: 'SET',
    count: 150
})
store.dispatch(setCount({count:150}))
