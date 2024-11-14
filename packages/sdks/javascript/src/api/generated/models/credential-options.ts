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


import { CredentialProvider } from './credential-provider';
import { CredentialProviderType } from './credential-provider-type';

/**
 * 
 * @export
 * @interface CredentialOptions
 */
export interface CredentialOptions {
    /**
     * The list of credential provider types
     * @type {Array<CredentialProviderType>}
     * @memberof CredentialOptions
     */
    provider_types: Array<CredentialProviderType>;
    /**
     * The list of supported credential providers
     * @type {Array<CredentialProvider>}
     * @memberof CredentialOptions
     */
    supported_providers: Array<CredentialProvider>;
}

