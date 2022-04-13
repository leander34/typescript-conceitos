type VerifyUser = (user: User, sentUser: User) => boolean
type User = { username: string, password: string }

const verifyUser: VerifyUser = (user, sentUser) => {
    return (
        user.username === sentUser.username && user.password === sentUser.password
    )
}

const dbUser = { username: 'leander', password: '123456'}
const sentUser = { username: 'leander', password: '123456'}
const loggedIn = verifyUser(dbUser, sentUser)
console.log(loggedIn)