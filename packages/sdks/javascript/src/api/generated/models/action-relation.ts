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


import { ActionData } from './action-data';
import { ActionResource } from './action-resource';
import { ActionStatus } from './action-status';
import { ActionSummary } from './action-summary';
import { ActionTriggeredFrom } from './action-triggered-from';
import { ActionType } from './action-type';
import { ServerAction } from './server-action';

/**
 * 
 * @export
 * @interface ActionRelation
 */
export interface ActionRelation {
    /**
     * The Id of the given action
     * @type {number}
     * @memberof ActionRelation
     */
    id: number;
    /**
     * 
     * @type {ActionStatus}
     * @memberof ActionRelation
     */
    status: ActionStatus;
    /**
     * Current item status human readable
     * @type {string}
     * @memberof ActionRelation
     */
    status_human_readable: string;
    /**
     * 
     * @type {ActionType}
     * @memberof ActionRelation
     */
    type: ActionType;
    /**
     * Human readable version of the action type
     * @type {string}
     * @memberof ActionRelation
     */
    type_human_readable: string;
    /**
     * The permalink URL to the action details on Devopness web app
     * @type {string}
     * @memberof ActionRelation
     */
    url_web_permalink: string;
    /**
     * 
     * @type {ActionData}
     * @memberof ActionRelation
     */
    action_data: ActionData | null;
    /**
     * 
     * @type {ActionTriggeredFrom}
     * @memberof ActionRelation
     */
    triggered_from: ActionTriggeredFrom;
    /**
     * 
     * @type {ActionResource}
     * @memberof ActionRelation
     */
    resource: ActionResource;
    /**
     * 
     * @type {ActionSummary}
     * @memberof ActionRelation
     */
    summary?: ActionSummary;
    /**
     * List of actions dispatched to servers
     * @type {Array<ServerAction>}
     * @memberof ActionRelation
     */
    servers?: Array<ServerAction>;
    /**
     * The date and time when the action started execution (i.e., left the `pending/queued` status)
     * @type {string}
     * @memberof ActionRelation
     */
    started_at: string | null;
    /**
     * The date and time when the action has finished execution
     * @type {string}
     * @memberof ActionRelation
     */
    completed_at: string | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof ActionRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof ActionRelation
     */
    updated_at: string;
}

