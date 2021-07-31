import React from 'react'
import './styles.css'

function CalorieCard(props) {
    return (
    <div className="card">
        <h4>{props.foodName}</h4>
        <p>You have consumed {props.calorieNo} cals today</p>
        <br/>
    </div>
    )
}

export default CalorieCard