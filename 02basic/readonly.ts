type User = {
    readonly _id: string
    name: string
    email: string
    createCardDetail?: number //opctional
}

let myUser: User = {
    _id: '123',
    name: '',
    email: '',
}
myUser.name = "h@g.com"
// myUser._id="jhf" it's want allow to change the value of _id

// mixed and match types in typescript

type cardNumber = {
    yourcardNum: string
}
type cardDate = {
    yourcardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let userCard: cardDetails = {
    yourcardNum: '123',
    yourcardDate: '',
    cvv: 67
}