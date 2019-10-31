"use strict"
import { molarMass, PeriodicTable } from "./molarmass.js";
let periodicTable = new PeriodicTable()
let inputRef = document.getElementById("chemical_formula")
let chemFormulaRef = document.getElementById("chemical_formula_big")
let ERROR_STATE;

// DOM MANIPULATING

// THhis function is responsible for constantly updating the large formula text with the contents of
// input ref. Numbers are converted to a subscript so that users can see how the formula they entered
// will be intrepreted by the molar mass calculating logic. 
const updateLargeText = (e) => {
    chemFormulaRef.innerText = ""
    if (inputRef.value!=="") {
        for (let i=0;i<inputRef.value.length; i++) {
            let element = inputRef.value[i]
            if (isNaN(element)) {
                // Element is not a number
                let letter = document.createElement("span")
                letter.innerText = element
                chemFormulaRef.append(letter)
            } else {
                let number = document.createElement("sub")
                number.innerText = element
                chemFormulaRef.append(number)
            }
        }
        // formulaParser(chemFormulaRef.innerText)
        fetchMolarMass(chemFormulaRef.innerText)
    } else {
        chemFormulaRef.innerHTML = "&nbsp"
        document.getElementById("small_title").innerText = "Molar Mass Calculator"
    }
}

// This function will update the large molar mass header with the molar mass that was calculated. Rounded to 3 decimal
// places for a e s t h e t i c purposes
const logMolarMass = (molarMass) => {
    let molarMassRefLarge = document.getElementById("molar_mass")
    let molarMassRefSmall = document.getElementById("small_title")
    molarMass = molarMass.toFixed(3)
    molarMassRefLarge.innerHTML = molarMass + "<span> gmol</span>"+"<sup>-1</sup>"
    molarMassRefSmall.innerHTML = molarMass + "<span> gmol</span>"+"<sup>-1</sup>"
}

// Change the colour of the che molar mass and chemical formula
const changeMolarMassColour = (colour) => {
    let molarMassRef;
    if (document.getElementById("small_title")) {
        molarMassRef = document.getElementById("small_title")
    } else {
        molarMassRef = document.getElementById("large_title")
        molarMassRef.style.color = colour
    }

    
    chemFormulaRef.style.color = colour
    
    if (colour==="red") {;
        setTimeout(()=>{
		document.getElementById("chemical_formula_div").classList.add("is-invalid")
		document.getElementById("chemical_formula_div").classList.add("is-dirty")
	},0);
    } else {
        document.getElementById("chemical_formula_div").classList.remove("is-invalid");
        document.getElementById("chemical_formula_div").classList.remove("is-dirty");
    }
}

// ERROR CHECKING
// While the molar mass calculating module does it's job perfectly when provided with an accurate
// representation of the molecule, we have to assume that a user may be curious and attempt to write
// in elements that don't exist. It is important to make user's aware of a molar mass that is incorrect
// so that they don't use the wrong value in calculations. This function checks the last element inside a 
// chemical formula to see if it exists. The reason we don't have to check the entire formula is because
// we can safely assume that the user will type a chemical formula from start to Finish



const formulaParser = (formula) => {
    let listOfElements = ""
    let elementToCheck = ""
    for (let i=0;i<formula.length;i++) {
        if (formula[i].match("[A-Z]")) {
            continue
        } 

    }
    console.log(listOfElements)

}

const isLowerCase = (char) => {
    if (char.match("[a-z]")) {
        return true
    } else {
        return false
    }
}

// CALCULATING MOLAR MASS

const fetchMolarMass = (formula,callback) => {
    try {
        let formulaMolarMass = molarMass(formula)
        validFormulaCheck(formula)
        changeMolarMassColour("black")
        logMolarMass(formulaMolarMass)
        ERROR_STATE = false
    } catch (err) {
        changeMolarMassColour("red")
        molarMassRef.innerHTML = "&nbsp"
    }
}

let ValidityMatrix = {
    S: {S: false, U: true, L: false, N: false, O: true, C: false, E: false},
    U: {S: false, U: true, L: true, N: true, O: true, C: true, E: true},
    L: {S: false, U: true, L: false, N: true, O: true, C: true, E: true},
    N: {S: false, U: true, L: false, N: true, O: true, C: true, E: true},
    O: {S: false, U: true, L: false, N: false, O: true, C: false, E: false},
    C: {S: false, U: false, L: false, N: true, O: false, C: true, E: true},
    E: {S: false, U: true, L: true, N: true, O: false, C: true, E: false}
}


function validFormulaCheck(formula) {
    let i=0
    let currentElement = ""
    while (i<formula.length) {
        startOrEnd(i,formula)
        let firstLetter = categorise(i,formula)
        let secondLetter = categorise(i+1,formula)
        if (ValidityMatrix[firstLetter][secondLetter]) {
            if (firstLetter==="U") {
                if (secondLetter==="L") {
                    currentElement = formula[i]+formula[i+1]
                } else {
                    currentElement = formula[i]
                }
                // Checking Mechanism
                if (periodicTable.get(currentElement)===undefined) {
                    throw new Error("Element Does Not Exist")
                }
                //
                currentElement = ""
            }
            i++
        } else {
            throw new Error("Invalid Formula")
        }
    }

}

function categorise(i,formula) {
    // Test for Start and End
    // Special Cases
    // Special if-condition to check formulas that have a length
    // of 1. In this case
    if (i===formula.length) {
        return "E"
    }

    if (formula[i].match("[A-Z]")) {
        return "U";
    } else if (formula[i].match("[a-z]")) {
        return "L"
    } else if (formula[i].match("[1-9]")) {
        return "N"
    } else if (formula[i]==="("||formula[i]==="[") {
        return "O"
    } else if (formula[i]===")"||formula[i]==="]") {
        return "C"
    } else {
        throw new Error("Invalid Symbol")
    }
}

function startOrEnd(i,formula) {
    if (i==0) {
        let startLetter = categorise(i,formula)
        if (!ValidityMatrix["S"][startLetter]) {
            throw new Error("Invalid Start")
        }
    }

    if (i==formula.length-1) {
        let endLetter = categorise(i,formula)
        if (!ValidityMatrix["E"][endLetter]) {
            throw new Error("Invalid End")
        }
    }
}


// EVENT LISTENERS
inputRef.oninput = updateLargeText



