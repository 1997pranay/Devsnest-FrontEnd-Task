import React from 'react'
import CalorieCard from './CalorieCard'
import data from './data'
import './styles.css'

const cardComponents = data.map(item => {
    return <CalorieCard key={item.id} foodName={item.foodName} calorieNo={item.calorieNo}/>
})


function App() {

    return (
        <div className="main">
            <h2>Calorie Tracker</h2>
            <div className="container">
                {cardComponents}
            </div>
        </div>
    )
}

export default App