type User = {
    name: string,
    age: number,
    skills: string[],
}

type Role = {
    name: string,
    id: number,
}

type UserWithRole = {
    user: User,
    role: Role,
};

