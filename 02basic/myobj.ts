const user = {
    name: 'mrinal',
    email: 's@g.com',
    age: 34
}

// write some
function createUser({ name: string, isPaid: boolean }) { }

let newUser = { name: 'mrina', isPaid: false, email: 's@g.com' }
// createUser({ name: 'mrina', isPaid: false, email: 's@g.com' })//here we are getting error because only 2 args accepted
createUser(newUser)

function createCourse(): { name: 'mrina', price: number } {
    return { name: 'mrina', price: 10 }
}
export { }