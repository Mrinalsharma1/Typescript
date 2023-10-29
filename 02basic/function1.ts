function sum(num: number): number {
    return num + 2
    // return 'hello' //it will also work but its shoude not work here, to avoid this used return type
}
const suntwo = sum(4)

function toUpper(val: string) {
    return val.toUpperCase()
}

toUpper('shyam')
function isLogin(name: string, email: string, isPaid: boolean) {

}
isLogin("mrina", "abc@.com", false)

let signUp = (name: string, email: string, isPaid: boolean = false) => { } //default ispaid value can passed like it
signUp('mrinla', 'm@g.com')

// few more case can happen during production
// function getValue(val: number): {
//     if (val > 5) return true
//     return '200 OK'
// }
// getValue(5)

const getHello = (s: string): string => {
    return ''
}

const heroes = ['one', 'two', 'three']
heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void { //if not returning anythings use void
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}