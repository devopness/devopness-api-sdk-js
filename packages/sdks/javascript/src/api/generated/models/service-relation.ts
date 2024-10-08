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


import { ActionRelation } from './action-relation';
import { ServiceInitialState } from './service-initial-state';

/**
 * 
 * @export
 * @interface ServiceRelation
 */
export interface ServiceRelation {
    /**
     * The unique ID of the given service
     * @type {number}
     * @memberof ServiceRelation
     */
    id: number;
    /**
     * The human readable service name
     * @type {string}
     * @memberof ServiceRelation
     */
    name: string;
    /**
     * The service type
     * @type {string}
     * @memberof ServiceRelation
     */
    type: string;
    /**
     * Formatted/human readable version of the service type
     * @type {string}
     * @memberof ServiceRelation
     */
    type_human_readable: string;
    /**
     * The service current installed version
     * @type {string}
     * @memberof ServiceRelation
     */
    version: string | null;
    /**
     * Indicates if the service was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof ServiceRelation
     */
    auto_generated: boolean;
    /**
     * Indicates if the service will start automatically on operating system boot
     * @type {boolean}
     * @memberof ServiceRelation
     */
    auto_start: boolean;
    /**
     * 
     * @type {ServiceInitialState}
     * @memberof ServiceRelation
     */
    initial_state: ServiceInitialState;
    /**
     * A text describing the service, provided by the service author
     * @type {string}
     * @memberof ServiceRelation
     */
    description: string | null;
    /**
     * 
     * @type {ActionRelation}
     * @memberof ServiceRelation
     */
    last_action: ActionRelation | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ServiceRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ServiceRelation
     */
    updated_at: string;
}
