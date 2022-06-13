export type StringOrBoolean = string | boolean;

let strOrBool: StringOrBoolean;

export interface User {
    id: string;
    name: string;
}

export interface Classroom {
    id: number;
    subject: string;
}

export type UserOrClassroom = User | Classroom;



export function check(userOrClassroom: UserOrClassroom) {
    return userOrClassroom.id;
}
