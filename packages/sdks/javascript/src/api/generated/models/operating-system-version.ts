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


import { CloudOsVersionCode } from './cloud-os-version-code';

/**
 * 
 * @export
 * @interface OperatingSystemVersion
 */
export interface OperatingSystemVersion {
    /**
     * Version name
     * @type {string}
     * @memberof OperatingSystemVersion
     */
    name: string;
    /**
     * The name given to the OS version while it is under development. For some OS it can be seen as a version nickname that is used to refer to that version even after official release.
     * @type {string}
     * @memberof OperatingSystemVersion
     */
    code_name: string;
    /**
     * Version number
     * @type {string}
     * @memberof OperatingSystemVersion
     */
    version: string;
    /**
     * 
     * @type {CloudOsVersionCode}
     * @memberof OperatingSystemVersion
     */
    os_version_code: CloudOsVersionCode | null;
    /**
     * Release date
     * @type {string}
     * @memberof OperatingSystemVersion
     */
    released_at: string;
    /**
     * The date when this release will no longer receive updates under their LTS (Long Term Support) conditions. For details and terms of service, please refer to the documentation on the OS website.
     * @type {string}
     * @memberof OperatingSystemVersion
     */
    end_standard_support_at: string;
    /**
     * The date when this release will no longer receive any patches or security updates. For details and terms of service, please refer to the documentation on the OS website.
     * @type {string}
     * @memberof OperatingSystemVersion
     */
    end_of_life_at: string;
}

