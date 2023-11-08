// with normal function we can write array in generic
function getProduct<T>(Product: T[]): T {
    let myIndex = 3;
    return Product[myIndex]
}

// with arrow function we can use like it
const newProduct = <T>(Product: T[]): T => {
    let myIndex = 7
    return Product[myIndex]
}

//generic in object

function stock<U, V>(valOne: U, valTwo: V): object {
    return {
        valOne, valTwo
    }
}
stock("f", 4)

// another Way
interface Database {
    Connection: string,
    Username: string,
    Password: string
}
function check<U, V extends Database>(valOne: U, valTwo: V): object {
    return {
        valOne, valTwo
    }
}
check(2, { Connection: 'raju', Username: 'n', Password: 'dg' })