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
 * @interface TeamUpdate
 */
export interface TeamUpdate {
    /**
     * The unique ID of the given team.
     * @type {number}
     * @memberof TeamUpdate
     */
    id: number;
    /**
     * The name of the team. Must not be greater than 255 characters.
     * @type {string}
     * @memberof TeamUpdate
     */
    name: string;
    /**
     * The URL to team\'s image. Must be a valid URL.
     * @type {string}
     * @memberof TeamUpdate
     */
    photo_url?: string;
}
