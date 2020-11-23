import { Node } from "node-red";

export interface Credentials {
    secusername: string;
    secpassword: string;
}

export interface MikrotikDeviceConfig {
    host: string;
    port: number;
    /**
     * @deprecated replaced by secure usage of Credentials
     */
    username:string;

    /**
     * @deprecated replaced by secure usage of Credentials
     */
    password:string;
}

export interface MikrotikDeviceNode extends Node<Credentials>, MikrotikDeviceConfig {

}