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
import { UserProfileOptions } from '../../generated/models';

/**
 * StaticDataUserProfileOptionsApiService - Auto-generated
 */
export class StaticDataUserProfileOptionsApiService extends ApiBaseService {
    /**
     * 
     * @summary List `User profile` options
     */
    public async getStaticUserProfileOptions(): Promise<ApiResponse<UserProfileOptions>> {
        
        let queryString = '';

        const requestUrl = '/static/user-profile-options' + (queryString? `?${queryString}` : '');

        const response = await this.get <UserProfileOptions>(requestUrl);
        return new ApiResponse(response);
    }
}
