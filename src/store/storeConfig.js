import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        // console.log(state, ' ', action)
        return {
            min: 10,
            max: 55
        }
    },
    nomes: function(state, action){
        // console.log(state, ' ', action)
        return[
            'Paulo',
            'Henrique',
            'Teixeira'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig