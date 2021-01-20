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
import { SshKey } from '../../generated/models';
import { SshKeyCreate } from '../../generated/models';
import { SshKeyRelation } from '../../generated/models';

/**
 * ProjectsSSHKeysApiService - Auto-generated
 */
export class ProjectsSSHKeysApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a SSH key and link it to the given project
     * @param {number} projectId The project numeric Id
     * @param {SshKeyCreate} sshKeyCreate A JSON object containing SSH key data
     */
    public async addSshKeyToProject(projectId: number, sshKeyCreate: SshKeyCreate): Promise<ApiResponse<SshKey>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addSshKeyToProject');
        }
        if (sshKeyCreate === null || sshKeyCreate === undefined) {
            throw new ArgumentNullException('sshKeyCreate', 'addSshKeyToProject');
        }
        
        let queryString = '';

        const requestUrl = '/projects/{project_id}/ssh-keys' + (queryString? `?${queryString}` : '');

        const response = await this.post <SshKey, SshKeyCreate>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), sshKeyCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all SSH keys added to a project
     * @param {number} projectId The project numeric Id
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listProjectSshKeys(projectId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<SshKeyRelation>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectSshKeys');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/projects/{project_id}/ssh-keys' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<SshKeyRelation>>(requestUrl.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
