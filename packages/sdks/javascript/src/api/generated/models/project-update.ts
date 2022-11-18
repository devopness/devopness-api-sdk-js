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
 * @interface ProjectUpdate
 */
export interface ProjectUpdate {
    /**
     * The ID of the project.
     * @type {number}
     * @memberof ProjectUpdate
     */
    id: number;
    /**
     * The name of the project. Must not be greater than 60 characters.
     * @type {string}
     * @memberof ProjectUpdate
     */
    name: string;
    /**
     * A base64 string representation of the logo image.
     * @type {string}
     * @memberof ProjectUpdate
     */
    logo_image?: string;
    /**
     * A URL path to the project\'s logo image. Must be a valid URL.
     * @type {string}
     * @memberof ProjectUpdate
     */
    logo_url?: string;
}

