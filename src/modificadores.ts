interface User {
    readonly id: number;
    name: string;
    email?: string;
}

const user: User = {
    id: 1,
    name: "Alan",
    email: ""
}

// user.id = 2
