class User {
    name: string
    private email: string
    readonly city: string = "jaipur"
    constructor(name: string, email: string) {
        this.name = email
        this.email = email
    }

    private deleteToken() {
        console.log("Token deleted")
    }
}
const myUser = new User('mrinal', 's@g.com')
myUser.name = "dsh"
// myUser.deleteToken() //we can create private methods also
// myUser.email="fhdgj" //it's not access outside the class



// we can write in another way too
class User1 {
    // private _courseCount: number = 1
    protected _courseCount: number = 1
    readonly city: string = "jaipur"
    constructor(name: string, private email: string) {
        name: String
        email: String
    }

    // getter method in typescrip to get the value inside class
    get courseCount(): Number {
        return this._courseCount
    }

    // setter wan't be return type
    set courseCount(num: number) {
        if (num <= 1) {
            throw new Error('Course count should be more than 1')
        } else {
            this._courseCount = num
        }
    }
}
const userList = new User1('mrinal', 'q@g.com')

class SubUser extends User1 {
    isfamily: boolean = true
    changeCourseCount() {
        // this._courseCount=5 just because courseCount is declared as private so we can't modify to access that we have to change as protected
        this._courseCount = 6 //now it's not showing any error bcus it's changed into protected
    }
}



