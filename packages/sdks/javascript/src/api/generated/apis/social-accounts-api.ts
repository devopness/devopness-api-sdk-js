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
import { SocialAccount } from '../../generated/models';
import { SocialAccountCreate } from '../../generated/models';
import { SocialAccountRelation } from '../../generated/models';
import { SocialAccountStatus } from '../../generated/models';

/**
 * SocialAccountsApiService - Auto-generated
 */
export class SocialAccountsApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a social account
     * @param {SocialAccountCreate} socialAccountCreate A JSON object containing the resource data
     */
    public async addSocialAccount(socialAccountCreate: SocialAccountCreate): Promise<ApiResponse<SocialAccount>> {
        if (socialAccountCreate === null || socialAccountCreate === undefined) {
            throw new ArgumentNullException('socialAccountCreate', 'addSocialAccount');
        }
        
        let queryString = '';

        const requestUrl = '/social-accounts' + (queryString? `?${queryString}` : '');

        const response = await this.post <SocialAccount, SocialAccountCreate>(requestUrl, socialAccountCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Delete a given social account
     * @param {number} socialAccountId The ID of the social account.
     */
    public async deleteSocialAccount(socialAccountId: number): Promise<ApiResponse<void>> {
        if (socialAccountId === null || socialAccountId === undefined) {
            throw new ArgumentNullException('socialAccountId', 'deleteSocialAccount');
        }
        
        let queryString = '';

        const requestUrl = '/social-accounts/{social_account_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"social_account_id"}}`, encodeURIComponent(String(socialAccountId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a social account by provider name
     * @param {string} provider The provider name.
     */
    public async getSocialAccount(provider: string): Promise<ApiResponse<SocialAccount>> {
        if (provider === null || provider === undefined) {
            throw new ArgumentNullException('provider', 'getSocialAccount');
        }
        
        let queryString = '';

        const requestUrl = '/social-accounts/{provider}' + (queryString? `?${queryString}` : '');

        const response = await this.get <SocialAccount>(requestUrl.replace(`{${"provider"}}`, encodeURIComponent(String(provider))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get status of a social account
     * @param {string} provider The provider name.
     */
    public async getSocialAccountStatus(provider: string): Promise<ApiResponse<SocialAccountStatus>> {
        if (provider === null || provider === undefined) {
            throw new ArgumentNullException('provider', 'getSocialAccountStatus');
        }
        
        let queryString = '';

        const requestUrl = '/social-accounts/{provider}/status' + (queryString? `?${queryString}` : '');

        const response = await this.get <SocialAccountStatus>(requestUrl.replace(`{${"provider"}}`, encodeURIComponent(String(provider))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all social accounts of the current user
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listSocialAccounts(page?: number, perPage?: number): Promise<ApiResponse<Array<SocialAccountRelation>>> {
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/social-accounts' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<SocialAccountRelation>>(requestUrl);
        return new ApiResponse(response);
    }
}
