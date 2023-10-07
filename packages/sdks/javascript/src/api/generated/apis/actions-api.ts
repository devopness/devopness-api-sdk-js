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

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Action } from '../../generated/models';
import { ActionRelation } from '../../generated/models';
import { ActionRetryResponse } from '../../generated/models';
import { ApiError } from '../../generated/models';

/**
 * ActionsApiService - Auto-generated
 */
export class ActionsApiService extends ApiBaseService {
    /**
     * 
     * @summary Get an action by its ID
     * @param {number} actionId The ID of the action.
     */
    public async getAction(actionId: number): Promise<ApiResponse<Action>> {
        if (actionId === null || actionId === undefined) {
            throw new ArgumentNullException('actionId', 'getAction');
        }
        
        let queryString = '';

        const requestUrl = '/actions/{action_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Action>(requestUrl.replace(`{${"action_id"}}`, encodeURIComponent(String(actionId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all actions belonging to current user
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listActions(page?: number, perPage?: number): Promise<ApiResponse<Array<ActionRelation>>> {
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/actions' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ActionRelation>>(requestUrl);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List resource actions of an action type
     * @param {number} resourceId The resource ID.
     * @param {string} resourceType The resource type to get related actions.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listActionsByResourceType(resourceId: number, resourceType: string, page?: number, perPage?: number): Promise<ApiResponse<Array<ActionRelation>>> {
        if (resourceId === null || resourceId === undefined) {
            throw new ArgumentNullException('resourceId', 'listActionsByResourceType');
        }
        if (resourceType === null || resourceType === undefined) {
            throw new ArgumentNullException('resourceType', 'listActionsByResourceType');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/actions/{resource_type}/{resource_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ActionRelation>>(requestUrl.replace(`{${"resource_id"}}`, encodeURIComponent(String(resourceId))).replace(`{${"resource_type"}}`, encodeURIComponent(String(resourceType))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List actions triggered to a given action target resource
     * @param {number} targetResourceId The resource ID of the action target.
     * @param {string} targetResourceType The resource type of the action target on which this action will be executed to perform operations on the action resource.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listActionsByTargetResourceType(targetResourceId: number, targetResourceType: string, page?: number, perPage?: number): Promise<ApiResponse<Array<ActionRelation>>> {
        if (targetResourceId === null || targetResourceId === undefined) {
            throw new ArgumentNullException('targetResourceId', 'listActionsByTargetResourceType');
        }
        if (targetResourceType === null || targetResourceType === undefined) {
            throw new ArgumentNullException('targetResourceType', 'listActionsByTargetResourceType');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/actions/targets/{target_resource_type}/{target_resource_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ActionRelation>>(requestUrl.replace(`{${"target_resource_id"}}`, encodeURIComponent(String(targetResourceId))).replace(`{${"target_resource_type"}}`, encodeURIComponent(String(targetResourceType))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Retry an action
     * @param {number} actionId The ID of the action.
     */
    public async retryAction(actionId: number): Promise<ApiResponse<ActionRetryResponse>> {
        if (actionId === null || actionId === undefined) {
            throw new ArgumentNullException('actionId', 'retryAction');
        }
        
        let queryString = '';

        const requestUrl = '/actions/{action_id}/retry' + (queryString? `?${queryString}` : '');

        const response = await this.post <ActionRetryResponse>(requestUrl.replace(`{${"action_id"}}`, encodeURIComponent(String(actionId))));
        return new ApiResponse(response);
    }
}
