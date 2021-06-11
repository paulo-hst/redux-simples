import React from 'react'
import Card from './Card'

export default props => {

    const { min, max } = props

    return(
        <Card title="Soma dos números" green>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <span>{ max + min }</span>
                </span>
            </div>
        </Card>
    )
}