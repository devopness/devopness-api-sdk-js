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
import { ApiError } from '../../generated/models';
import { HookRelation } from '../../generated/models';

/**
 * ApplicationsHooksApiService - Auto-generated
 */
export class ApplicationsHooksApiService extends ApiBaseService {
    /**
     * 
     * @summary Returns a list of all incoming hooks belonging to an application
     * @param {number} applicationId Unique id of the application
     */
    public async listApplicationHooks(applicationId: number): Promise<ApiResponse<Array<HookRelation>>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'listApplicationHooks');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}/hooks' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<HookRelation>>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }
}
