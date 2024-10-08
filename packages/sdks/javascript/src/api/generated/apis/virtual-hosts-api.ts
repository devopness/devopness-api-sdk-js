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
import { VirtualHost } from '../../generated/models';
import { VirtualHostGetStatus } from '../../generated/models';
import { VirtualHostUpdate } from '../../generated/models';

/**
 * VirtualHostsApiService - Auto-generated
 */
export class VirtualHostsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given virtual host
     * @param {number} virtualHostId The ID of the virtual host.
     */
    public async deleteVirtualHost(virtualHostId: number): Promise<ApiResponse<void>> {
        if (virtualHostId === null || virtualHostId === undefined) {
            throw new ArgumentNullException('virtualHostId', 'deleteVirtualHost');
        }

        let queryString = '';

        const requestUrl = '/virtual-hosts/{virtual_host_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"virtual_host_id"}}`, encodeURIComponent(String(virtualHostId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get current status of a virtual host
     * @param {number} virtualHostId The ID of the virtual host.
     * @param {VirtualHostGetStatus} virtualHostGetStatus A JSON object containing the resource data
     */
    public async getStatusVirtualHost(virtualHostId: number, virtualHostGetStatus: VirtualHostGetStatus): Promise<ApiResponse<void>> {
        if (virtualHostId === null || virtualHostId === undefined) {
            throw new ArgumentNullException('virtualHostId', 'getStatusVirtualHost');
        }
        if (virtualHostGetStatus === null || virtualHostGetStatus === undefined) {
            throw new ArgumentNullException('virtualHostGetStatus', 'getStatusVirtualHost');
        }

        let queryString = '';

        const requestUrl = '/virtual-hosts/{virtual_host_id}/get-status' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, VirtualHostGetStatus>(requestUrl.replace(`{${"virtual_host_id"}}`, encodeURIComponent(String(virtualHostId))), virtualHostGetStatus);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a virtual host by ID
     * @param {number} virtualHostId The ID of the virtual host.
     */
    public async getVirtualHost(virtualHostId: number): Promise<ApiResponse<VirtualHost>> {
        if (virtualHostId === null || virtualHostId === undefined) {
            throw new ArgumentNullException('virtualHostId', 'getVirtualHost');
        }

        let queryString = '';

        const requestUrl = '/virtual-hosts/{virtual_host_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <VirtualHost>(requestUrl.replace(`{${"virtual_host_id"}}`, encodeURIComponent(String(virtualHostId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing virtual host
     * @param {number} virtualHostId The ID of the virtual host.
     * @param {VirtualHostUpdate} virtualHostUpdate A JSON object containing the resource data
     */
    public async updateVirtualHost(virtualHostId: number, virtualHostUpdate: VirtualHostUpdate): Promise<ApiResponse<void>> {
        if (virtualHostId === null || virtualHostId === undefined) {
            throw new ArgumentNullException('virtualHostId', 'updateVirtualHost');
        }
        if (virtualHostUpdate === null || virtualHostUpdate === undefined) {
            throw new ArgumentNullException('virtualHostUpdate', 'updateVirtualHost');
        }

        let queryString = '';

        const requestUrl = '/virtual-hosts/{virtual_host_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, VirtualHostUpdate>(requestUrl.replace(`{${"virtual_host_id"}}`, encodeURIComponent(String(virtualHostId))), virtualHostUpdate);
        return new ApiResponse(response);
    }
}