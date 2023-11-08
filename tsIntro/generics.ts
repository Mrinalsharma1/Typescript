const score: Array<number> = []

//first example here passing val and returning val in any of these type
function identity(val: (boolean | number)): (boolean | number) {
    return val
}

//second way here val can be anything and returning also anything
function demo(val: any): any {
    return val
}

//third way now this is a proper generic concept
function identitytwo<Type>(val: Type): Type {
    return val
}
identitytwo(false) //now it can accept any parameter

//instide of Type we can write any thing but it should be at every place

function identitythree<t>(val: t): t {
    return val
}