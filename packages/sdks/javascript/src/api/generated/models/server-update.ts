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



/**
 * 
 * @export
 * @interface ServerUpdate
 */
export interface ServerUpdate {
    /**
     * The unique ID of the given server.
     * @type {number}
     * @memberof ServerUpdate
     */
    id: number;
    /**
     * Public ipv4 address for server access.
     * @type {string}
     * @memberof ServerUpdate
     */
    ip_address?: string;
    /**
     * The network port to which the SSH daemon is listening to SSH connections on the server. Must be between 0 and 65535.
     * @type {number}
     * @memberof ServerUpdate
     */
    ssh_port?: number;
    /**
     * Maximum number of actions that can run in parallel on this server. `0` means no limit of simultaneous actions. `1` means just a single action will be started at a time to run on this server. Must be between 0 and 65535.
     * @type {number}
     * @memberof ServerUpdate
     */
    max_parallel_actions?: number;
}

