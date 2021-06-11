import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'

const Soma = props => {
    
    const { min, max } = props

    return(
        <Card title="Soma dos números" green>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <span>{ min + max }</span>
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

export default connect(mapStateToProps)(Soma)