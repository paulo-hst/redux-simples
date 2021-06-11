import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {

    return(
        <Card title="Intervalo de números" blue>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input 
                        type="number"
                        value={2}
                        readOnly
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input 
                        type="number" 
                        value={5}
                        readOnly
                    />
                </span>

            </div>
        </Card>
    )
}