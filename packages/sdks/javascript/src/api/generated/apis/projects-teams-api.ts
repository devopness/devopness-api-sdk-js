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
import { Team } from '../../generated/models';
import { TeamProjectCreate } from '../../generated/models';
import { TeamRelation } from '../../generated/models';

/**
 * ProjectsTeamsApiService - Auto-generated
 */
export class ProjectsTeamsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a team to the given project
     * @param {number} projectId The ID of the project.
     * @param {TeamProjectCreate} teamProjectCreate A JSON object containing the resource data
     */
    public async addProjectTeam(projectId: number, teamProjectCreate: TeamProjectCreate): Promise<ApiResponse<Team>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addProjectTeam');
        }
        if (teamProjectCreate === null || teamProjectCreate === undefined) {
            throw new ArgumentNullException('teamProjectCreate', 'addProjectTeam');
        }
        let queryString = '';

        const requestUrl = '/projects/{project_id}/teams' + (queryString? `?${queryString}` : '');

        const response = await this.post <Team, TeamProjectCreate>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), teamProjectCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all teams belonging to a project
     * @param {number} projectId The ID of the project.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectTeams(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<TeamRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectTeams');
        }
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/teams' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<TeamRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
