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


import { EnvironmentLinkItem } from './environment-link-item';
import { ServiceInitialState } from './service-initial-state';
import { ServiceName } from './service-name';

/**
 * 
 * @export
 * @interface ServiceProjectCreate
 */
export interface ServiceProjectCreate {
    /**
     * Tells if the service should start automatically on operating system boot.
     * @type {boolean}
     * @memberof ServiceProjectCreate
     */
    auto_start?: boolean;
    /**
     * 
     * @type {ServiceInitialState}
     * @memberof ServiceProjectCreate
     */
    initial_state?: ServiceInitialState;
    /**
     * 
     * @type {ServiceName}
     * @memberof ServiceProjectCreate
     */
    type: ServiceName;
    /**
     * The service version to be installed. Must be one of <code></code> Must be at least 3 characters. Must not be greater than 30 characters.
     * @type {string}
     * @memberof ServiceProjectCreate
     */
    version: string;
    /**
     * 
     * @type {Array<EnvironmentLinkItem>}
     * @memberof ServiceProjectCreate
     */
    environments?: Array<EnvironmentLinkItem>;
}
