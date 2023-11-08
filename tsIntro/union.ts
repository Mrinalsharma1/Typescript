// now we can tell it will either containe number or string
let id: string | number = "233"
id = 3
id = "dsh"

type User = {
    name: string
    id: number
}
type Admin = {
    userName: string
    id: number
}

// here variable mrinal can store among both of the data 
let mrinal: User | Admin = {
    name: '',
    id: 8
}
mrinal = { userName: 'mrin', id: 2 }

// function is able to accept both type of args
// function getDbId(id: number | string) {
//     console.log(`id is ${id}`)
// }
// getDbId(2)
// getDbId('hey')

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toUpperCase()
    } else {
        id = id * 2
    }

}
getDbId('s')
getDbId(3)

//Now Let's Move On Array

const data: number[] = [1, 2, 3, 4] //here we can only store number data type
const data1: string[] = ["1", "2", "3"] //here we can only store string data type

// const data2:number[]|string[]=[1,'3',4] //most of the time such mistake happen it's accept either full num or full string

const data3: (number | string)[] = [1, '3', 4] // now we can store both of the data in array

//one unique senario
let seatAllot: 'aisle' | 'middle' | 'window'

seatAllot = 'aisle'
// seatAllot='dgj' //it's only accept these 3 seat type