interface UserAuthenticationQuery {
    password: string
    salt: string
    sessionToken: string
}

interface UserAuthenticationCreation {
    password: string
    salt: string
}

interface User {
    id: string
    v: number
    authentication: UserAuthenticationQuery
    email: string
    username: string
}

interface UserToBeCreated {
    authentication: UserAuthenticationCreation
    email: string
    username: string
}

export type { User, UserToBeCreated }