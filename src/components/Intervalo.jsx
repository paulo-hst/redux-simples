import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {

    const { min, max } = props



    return(
        <Card title="Intervalo de números" blue>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number" 
                        value={min} 
                        onChange={event => props.onMinChanged(+event.target.value)} 
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={max} 
                        onChange={event => props.onMaxChanged(+event.target.value)} 
                    />
                </span>

            </div>
        </Card>
    )
}