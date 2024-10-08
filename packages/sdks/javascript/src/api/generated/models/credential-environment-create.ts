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


import { CredentialInputSettings } from './credential-input-settings';

/**
 * 
 * @export
 * @interface CredentialEnvironmentCreate
 */
export interface CredentialEnvironmentCreate {
    /**
     * The name of the credential. Must not be greater than 60 characters.
     * @type {string}
     * @memberof CredentialEnvironmentCreate
     */
    name: string;
    /**
     * Must not be one of <code>self-hosted</code> Must not be greater than 20 characters.
     * @type {string}
     * @memberof CredentialEnvironmentCreate
     */
    provider_code: string;
    /**
     * Must be one of <code>cloud_provider</code> or <code>source_provider</code>.
     * @type {string}
     * @memberof CredentialEnvironmentCreate
     */
    provider_type: string;
    /**
     * If this credential is active or not.
     * @type {boolean}
     * @memberof CredentialEnvironmentCreate
     */
    active: boolean;
    /**
     * 
     * @type {CredentialInputSettings}
     * @memberof CredentialEnvironmentCreate
     */
    settings: CredentialInputSettings;
}
