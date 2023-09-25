export interface autenticationResponse{
    accessToken: string;
    expiresIn: number;
    expire: number;
}

export interface userDTO{
    id: string;
    user: string;
}

export interface userData{
    username: string;
    password: string;
}