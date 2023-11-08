interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string //we can write in both way this and below one
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

// we can re-open the interface at any time
interface User {
    githubToken: string
}

interface Admin extends User {

}

// now we can use Admin or User 
const userList: Admin | User = {
    dbId: 2,
    email: 's@.com',
    userId: 2,
    githubToken: '',
    startTrail: () => { return 'hello' },

    // cname is refrence of couponcode
    getCoupon: (cName = "BU34", value = 23) => {
        return 2
    }
}