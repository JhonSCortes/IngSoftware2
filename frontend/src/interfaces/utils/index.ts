interface loginPayload {
    email: string,
    password: string
}

interface registerPayload extends loginPayload {
    name: string
}

interface ProjectPayload {
    name: string,
    description: string,
    ownerId: string,
    startDate: string,
    endDate: string,
}


export type {loginPayload, registerPayload, ProjectPayload};