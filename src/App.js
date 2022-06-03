import React from "react";
import Die from "./Components/Die"

/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */
/*
function allNewDies() {
    let die_elements = []
    let die_numbers = []
    for (let i=0; i<10; i++) {
        let n = Math.floor( Math.random() * 6 + 1 )
        die_elements[i] = <Die number={n} />
        die_numbers[i] = n
    }
    console.log(die_numbers)
}*/

export default function App() {
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(Math.ceil(Math.random() * 6))
        }
        return newDice
    }
    console.log(allNewDice())

    return (
        <main>
            <div className="dice-container">
                <Die value="1" />
                <Die value="2" />
                <Die value="3" />
                <Die value="4" />
                <Die value="5" />
                <Die value="6" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
        </main>
    )
}