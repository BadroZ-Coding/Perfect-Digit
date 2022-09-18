def properDivides(number) :
    divides = []
    index = 0

    while index < number :
        index = index + 1

        if (number / index).is_integer() == True :
            divides.append(index)

    if divides[-1] == number :
        divides.pop()

    return divides

def pd(number) :
    index = 0
    divides = properDivides(number)
    perfectDigit = 0

    while index < len(divides) :
        index = index + 1
        
        perfectDigit = perfectDigit + divides[index - 1]

    if perfectDigit == number :
        print("ifPerfectNumber : true")
        print("Divides : ")
        print(divides)
    else :
        print("isPerfectNumber : false")


pd(496)