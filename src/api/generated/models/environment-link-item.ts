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
 * @interface EnvironmentLinkItem
 */
export interface EnvironmentLinkItem {
    /**
     * Environment\'s unique id
     * @type {number}
     * @memberof EnvironmentLinkItem
     */
    id: number;
    /**
     * Environment\'s name
     * @type {string}
     * @memberof EnvironmentLinkItem
     */
    name?: string | null;
    /**
     * A list of server IDs to which the item link/unlink operations must be performed
     * @type {Array<number>}
     * @memberof EnvironmentLinkItem
     */
    servers: Array<number>;
}

