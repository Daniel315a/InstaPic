export interface User{

    id: number,
    auth0Id: string,
    nickName: string,
    email: string,
    familyName: string,
    givenName: string,
    birthDate: Date,
    createdDate?: Date,
    isActive?: boolean

}