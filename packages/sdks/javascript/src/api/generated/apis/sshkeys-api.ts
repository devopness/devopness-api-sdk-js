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
import { SshKeyUpdate } from '../../generated/models';

/**
 * SSHKeysApiService - Auto-generated
 */
export class SSHKeysApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given SSH key
     * @param {number} sshKeyId Numeric ID of the SSH key to be deleted
     */
    public async deleteSshKey(sshKeyId: number): Promise<ApiResponse<void>> {
        if (sshKeyId === null || sshKeyId === undefined) {
            throw new ArgumentNullException('sshKeyId', 'deleteSshKey');
        }
        
        let queryString = '';

        const requestUrl = '/ssh-keys/{ssh_key_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"ssh_key_id"}}`, encodeURIComponent(String(sshKeyId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a SSH key by ID
     * @param {number} sshKeyId Numeric ID of the SSH key to get
     */
    public async getSshKey(sshKeyId: number): Promise<ApiResponse<SshKey>> {
        if (sshKeyId === null || sshKeyId === undefined) {
            throw new ArgumentNullException('sshKeyId', 'getSshKey');
        }
        
        let queryString = '';

        const requestUrl = '/ssh-keys/{ssh_key_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <SshKey>(requestUrl.replace(`{${"ssh_key_id"}}`, encodeURIComponent(String(sshKeyId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing SSH key
     * @param {number} sshKeyId Numeric ID of the SSH key to be updated
     * @param {SshKeyUpdate} sshKeyUpdate A JSON object containing SSH key data
     */
    public async updateSshKey(sshKeyId: number, sshKeyUpdate: SshKeyUpdate): Promise<ApiResponse<void>> {
        if (sshKeyId === null || sshKeyId === undefined) {
            throw new ArgumentNullException('sshKeyId', 'updateSshKey');
        }
        if (sshKeyUpdate === null || sshKeyUpdate === undefined) {
            throw new ArgumentNullException('sshKeyUpdate', 'updateSshKey');
        }
        
        let queryString = '';

        const requestUrl = '/ssh-keys/{ssh_key_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, SshKeyUpdate>(requestUrl.replace(`{${"ssh_key_id"}}`, encodeURIComponent(String(sshKeyId))), sshKeyUpdate);
        return new ApiResponse(response);
    }
}
