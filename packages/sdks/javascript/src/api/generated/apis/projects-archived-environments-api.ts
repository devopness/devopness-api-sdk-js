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
import { ArchivedEnvironmentRelation } from '../../generated/models';

/**
 * ProjectsArchivedEnvironmentsApiService - Auto-generated
 */
export class ProjectsArchivedEnvironmentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Return a list of all archived environments belonging to a project
     * @param {number} projectId The ID of the project.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectArchivedEnvironments(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<ArchivedEnvironmentRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectArchivedEnvironments');
        }

        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/environments/archived' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<ArchivedEnvironmentRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}