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
import { Script } from '../../generated/models';
import { ScriptCreate } from '../../generated/models';

/**
 * ApplicationsScriptsApiService - Auto-generated
 */
export class ApplicationsScriptsApiService extends ApiBaseService {
    /**
     * 
     * @summary Add script to application as a deployment step
     * @param {number} applicationId Unique ID of the application to retrieve scripts from
     * @param {ScriptCreate} scriptCreate A JSON object containing application script data
     */
    public async addScriptToApplication(applicationId: number, scriptCreate: ScriptCreate): Promise<ApiResponse<Script>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'addScriptToApplication');
        }
        if (scriptCreate === null || scriptCreate === undefined) {
            throw new ArgumentNullException('scriptCreate', 'addScriptToApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}/scripts' + (queryString? `?${queryString}` : '');

        const response = await this.post <Script, ScriptCreate>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), scriptCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary List scripts to be executed as custom deployment steps of an application
     * @param {number} applicationId Unique ID of the application to retrieve scripts from
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listApplicationScripts(applicationId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<Script>>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'listApplicationScripts');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/applications/{application_id}/scripts' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<Script>>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }
}
