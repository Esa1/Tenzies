import React from "react";
import Die from "./Die"

export default function Dies(props) {
    let die_elements = []
    let die_numbers = []
    for (let i=0; i<10; i++) {
        let n = Math.floor( Math.random() * 6 + 1 )
        die_elements[i] = <Die number={n} />
        die_numbers[i] = n
    }
    console.log(die_elements)
    let name="Esa"

    //dies={die_elements}
            
    return (
        <div className="grid-container">
            {die_elements}
        </div>
    )
}