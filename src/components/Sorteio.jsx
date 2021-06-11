import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Sorteio = props => {

    const { min, max } = props
    const rand = parseInt(Math.random() * (max - min) + min)

    return(
        <Card title="Sorteio de um número" purple>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <span>{ rand }</span>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Sorteio)