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
                    i += 2
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
    } else if (formula[i].match("[0-9]")) {
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