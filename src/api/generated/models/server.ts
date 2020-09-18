/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Action } from './action';
import { Environment } from './environment';

/**
 * 
 * @export
 * @interface Server
 */
export interface Server {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof Server
     */
    id: number;
    /**
     * The server\'s hostname
     * @type {string}
     * @memberof Server
     */
    hostname: string;
    /**
     * Public ipv4 address for server access
     * @type {string}
     * @memberof Server
     */
    ip_address: string;
    /**
     * The network port to which the SSH daemon is listening to SSH connections on the server
     * @type {number}
     * @memberof Server
     */
    ssh_port: number;
    /**
     * The id of the user who created the server and to whom the server belongs
     * @type {number}
     * @memberof Server
     */
    user_id: number;
    /**
     * Tells if the server is active or not
     * @type {boolean}
     * @memberof Server
     */
    active: boolean;
    /**
     * The list of actions related to the server
     * @type {Array<Action>}
     * @memberof Server
     */
    actions?: Array<Action>;
    /**
     * The list of environments to which the server is linked to
     * @type {Array<Environment>}
     * @memberof Server
     */
    environments?: Array<Environment>;
}

