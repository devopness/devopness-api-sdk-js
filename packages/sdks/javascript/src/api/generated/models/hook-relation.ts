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


import { ActionType } from './action-type';
import { HookIncomingSettings } from './hook-incoming-settings';
import { HookOutgoingSettings } from './hook-outgoing-settings';
import { HookTriggerWhen } from './hook-trigger-when';
import { HookType } from './hook-type';
import { ResourceType } from './resource-type';

/**
 * 
 * @export
 * @interface HookRelation
 */
export interface HookRelation {
    /**
     * The UUID of the given hook
     * @type {string}
     * @memberof HookRelation
     */
    id: string;
    /**
     * The name entered by the user (or auto-generated by `Devopness`) to uniquely identify the hook
     * @type {string}
     * @memberof HookRelation
     */
    name: string;
    /**
     * 
     * @type {HookType}
     * @memberof HookRelation
     */
    type: HookType;
    /**
     * 
     * @type {ActionType}
     * @memberof HookRelation
     */
    action_type: ActionType;
    /**
     * URL that triggers incoming hooks
     * @type {string}
     * @memberof HookRelation
     */
    url: string | null;
    /**
     * URL that outgoing hooks make a request to
     * @type {string}
     * @memberof HookRelation
     */
    target_url: string | null;
    /**
     * Indicates if the record was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof HookRelation
     */
    is_auto_generated: boolean;
    /**
     * Tells if requests to this hook must only be accepted when a HTTP header is sent with a message authentication code ([HMAC](https://en.wikipedia.org/wiki/HMAC)) generated based on the secret provided by Devopness and shared by user with external sources
     * @type {boolean}
     * @memberof HookRelation
     */
    requires_secret: boolean;
    /**
     * Indicates if the Devopness must be verify the SSL certificate of the request
     * @type {boolean}
     * @memberof HookRelation
     */
    verify_ssl: boolean;
    /**
     * Determines if the hook is currently active
     * @type {boolean}
     * @memberof HookRelation
     */
    active: boolean;
    /**
     * The ID of the project
     * @type {number}
     * @memberof HookRelation
     */
    project_id: number;
    /**
     * The ID of the environment
     * @type {number}
     * @memberof HookRelation
     */
    environment_id: number;
    /**
     * The ID of the pipeline executed by this hook
     * @type {number}
     * @memberof HookRelation
     */
    pipeline_id: number | null;
    /**
     * 
     * @type {ResourceType}
     * @memberof HookRelation
     */
    resource_type: ResourceType;
    /**
     * The hooks\' resource ID
     * @type {number}
     * @memberof HookRelation
     */
    resource_id: number;
    /**
     * 
     * @type {HookIncomingSettings | HookOutgoingSettings}
     * @memberof HookRelation
     */
    settings: HookIncomingSettings | HookOutgoingSettings | null;
    /**
     * 
     * @type {HookTriggerWhen}
     * @memberof HookRelation
     */
    trigger_when: HookTriggerWhen;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof HookRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof HookRelation
     */
    updated_at: string;
}

