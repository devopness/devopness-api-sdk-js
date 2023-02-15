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


import { ActionTriggerType } from './action-trigger-type';

/**
 * 
 * @export
 * @interface ActionTriggeredFrom
 */
export interface ActionTriggeredFrom {
    /**
     * The HTTP origin of the request that have been dispatched the action.
     * @type {string}
     * @memberof ActionTriggeredFrom
     */
    origin: string | null;
    /**
     * 
     * @type {ActionTriggerType}
     * @memberof ActionTriggeredFrom
     */
    trigger_type: ActionTriggerType;
    /**
     * The hook or user name that have been triggered the action.
     * @type {string}
     * @memberof ActionTriggeredFrom
     */
    name: string;
    /**
     * The user\'s email if the action have been manually triggered.
     * @type {string}
     * @memberof ActionTriggeredFrom
     */
    email: string | null;
    /**
     * The IP address of the request origin.
     * @type {string}
     * @memberof ActionTriggeredFrom
     */
    ip_address: string;
    /**
     * The user\'s ID if the action have been manually triggered.
     * @type {number}
     * @memberof ActionTriggeredFrom
     */
    user_id: number | null;
    /**
     * The hook\'s ID if the action have been triggered by a hook.
     * @type {number}
     * @memberof ActionTriggeredFrom
     */
    hook_id: number | null;
    /**
     * The hook request\'s ID if the action have been triggered by a hook.
     * @type {number}
     * @memberof ActionTriggeredFrom
     */
    hook_request_id: number | null;
}
