import React, { useState } from "react";
import Die from "./Components/Die"

/**
 * Challenge:
 * 
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it 
 * loads all new dice as soon as the app loads)
 * 
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

export default function App() {
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }
    console.log(dice)
    let diceElements = dice.map(d => <Die value={d} />)
    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    )
}