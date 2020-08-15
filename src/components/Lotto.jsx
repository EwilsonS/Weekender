import React from 'react'
import './lotto.css'
import { render } from '@testing-library/react'

class Lotto extends React.Component {

    lottoNumberGenerator = () => {
        return ; 
    }

    render() {
        return (
            <div className="lotto">
            <span className="number">{Math.floor(Math.random() * 90)}</span>
            <span className="number">{Math.floor(Math.random() * 90)}</span>
            <span className="number">{Math.floor(Math.random() * 90)}</span>
            <span className="number">{Math.floor(Math.random() * 90)}</span>
            <span className="number">{Math.floor(Math.random() * 90)}</span>
           
        </div>
        )
    }
}

export default Lotto