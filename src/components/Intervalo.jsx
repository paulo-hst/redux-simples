import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

import './Intervalo.css'

function Intervalo(props){

    const { min, max } = props

    return(
        <Card title="Intervalo de números" blue>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number"
                        value={min}
                        onChange={event => props.alterarMinimo(+event.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max}
                        onChange={event => props.alterarMaximo(+event.target.value)}
                    />
                </span>

            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispachToProps(dispatch){
    return{
        alterarMinimo(novoNumero){
            // Action creator / retorna action
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        },
        alterarMaximo(novoNumero){
            const action = alterarNumeroMaximo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Intervalo)