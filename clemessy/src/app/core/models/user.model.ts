import { AuthenticationModel } from "./authentication.model";

export interface UserModel {
    name: string;
    token?: AuthenticationModel;
    mail: string;
    isConnected: boolean;
}