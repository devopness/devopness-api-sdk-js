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
import { ActionHookRequest } from './action-hook-request';
import { ActionStatus } from './action-status';
import { ActionSummary } from './action-summary';
import { ActionTriggeredFrom } from './action-triggered-from';
import { ActionType } from './action-type';
import { EnvironmentRelation } from './environment-relation';
import { ProjectRelation } from './project-relation';
import { RelatedAction } from './related-action';
import { Resource } from './resource';
import { ServerAction } from './server-action';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface Action
 */
export interface Action {
    /**
     * The Id of the given action
     * @type {number}
     * @memberof Action
     */
    id: number;
    /**
     * The Id of the parent action that this action is a retry of
     * @type {number}
     * @memberof Action
     */
    retry_of: number | null;
    /**
     * 
     * @type {ActionStatus}
     * @memberof Action
     */
    status: ActionStatus;
    /**
     * Current item status human readable
     * @type {string}
     * @memberof Action
     */
    status_human_readable: string;
    /**
     * 
     * @type {ActionType}
     * @memberof Action
     */
    type: ActionType;
    /**
     * Human readable version of the action type
     * @type {string}
     * @memberof Action
     */
    type_human_readable: string;
    /**
     * The permalink URL to the action details on Devopness web app
     * @type {string}
     * @memberof Action
     */
    url_web_permalink: string;
    /**
     * 
     * @type {ActionData}
     * @memberof Action
     */
    action_data: ActionData | null;
    /**
     * 
     * @type {ActionTriggeredFrom}
     * @memberof Action
     */
    triggered_from: ActionTriggeredFrom;
    /**
     * 
     * @type {RelatedAction}
     * @memberof Action
     */
    parent: RelatedAction | null;
    /**
     * List of related actions
     * @type {Array<RelatedAction>}
     * @memberof Action
     */
    children: Array<RelatedAction>;
    /**
     * 
     * @type {UserRelation}
     * @memberof Action
     */
    triggered_by_user?: UserRelation;
    /**
     * 
     * @type {Resource}
     * @memberof Action
     */
    resource: Resource;
    /**
     * 
     * @type {ActionSummary}
     * @memberof Action
     */
    summary: ActionSummary;
    /**
     * 
     * @type {EnvironmentRelation}
     * @memberof Action
     */
    environment?: EnvironmentRelation | null;
    /**
     * 
     * @type {ProjectRelation}
     * @memberof Action
     */
    project?: ProjectRelation | null;
    /**
     * List of actions dispatched to servers
     * @type {Array<ServerAction>}
     * @memberof Action
     */
    servers?: Array<ServerAction>;
    /**
     * 
     * @type {ActionHookRequest}
     * @memberof Action
     */
    hook_requests?: ActionHookRequest;
    /**
     * The date and time when the action started execution (i.e., left the `pending/queued` status)
     * @type {string}
     * @memberof Action
     */
    started_at: string | null;
    /**
     * The date and time when the action has finished execution
     * @type {string}
     * @memberof Action
     */
    completed_at: string | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Action
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Action
     */
    updated_at: string;
}

