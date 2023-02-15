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
import { TeamInvitationRelation } from '../../generated/models';

/**
 * UsersTeamInvitationsApiService - Auto-generated
 */
export class UsersTeamInvitationsApiService extends ApiBaseService {
    /**
     * 
     * @summary Return a list of all pending team invitations for the authenticated user
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listUserTeamInvitations(page?: number, perPage?: number): Promise<ApiResponse<Array<TeamInvitationRelation>>> {
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/users/team-invitations' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<TeamInvitationRelation>>(requestUrl);
        return new ApiResponse(response);
    }
}