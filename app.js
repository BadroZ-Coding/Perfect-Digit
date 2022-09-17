function properDivides(number) {
    let divides = []
    let index = 0

    while (index < number) {
        index++

        if (Number.isInteger(number / index)) {
            divides.push(index)
        }
    }

    if (divides[divides.length - 1] === number) {
        divides.splice(divides.length - 1, 1)
    }

    return divides
}

function pd(number) {
    let index = 0
    let divides = properDivides(number)
    let perfectDigit = 0

    while (index < divides.length) {
        index++

        perfectDigit = perfectDigit + divides[index - 1]
    }

    if (perfectDigit === number) {
        return {
            ifPerfectNumber: true,
            divides: divides 
        }
    } else {
        return {
            isPerfectNumber: false,
            divides: undefined
        }
    }
}