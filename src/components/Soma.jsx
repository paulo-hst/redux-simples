import React from 'react'
import Card from './Card'

export default props => {

    return(
        <Card title="Soma dos números" green>
            <div>
                <span>
                    <strong>Resultado: </strong>
                    <span>3</span>
                </span>
            </div>
        </Card>
    )
}