interface loginPayload {
    email: string,
    password: string
}

interface registerPayload extends loginPayload {
    name: string
}

export type {loginPayload, registerPayload};