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
import { Daemon } from '../../generated/models';
import { DaemonGetStatus } from '../../generated/models';
import { DaemonRestart } from '../../generated/models';
import { DaemonUpdate } from '../../generated/models';

/**
 * DaemonsApiService - Auto-generated
 */
export class DaemonsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given Daemon
     * @param {number} daemonId The ID of the daemon.
     */
    public async deleteDaemon(daemonId: number): Promise<ApiResponse<void>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'deleteDaemon');
        }
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a Daemon by ID
     * @param {number} daemonId The ID of the daemon.
     */
    public async getDaemon(daemonId: number): Promise<ApiResponse<Daemon>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'getDaemon');
        }
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Daemon>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get current status of a daemon
     * @param {number} daemonId The ID of the daemon.
     * @param {DaemonGetStatus} daemonGetStatus A JSON object containing the resource data
     */
    public async getStatusDaemon(daemonId: number, daemonGetStatus: DaemonGetStatus): Promise<ApiResponse<void>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'getStatusDaemon');
        }
        if (daemonGetStatus === null || daemonGetStatus === undefined) {
            throw new ArgumentNullException('daemonGetStatus', 'getStatusDaemon');
        }
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}/get-status' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, DaemonGetStatus>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))), daemonGetStatus);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Restart a Daemon
     * @param {number} daemonId The ID of the daemon.
     * @param {DaemonRestart} daemonRestart A JSON object containing the resource data
     */
    public async restartDaemon(daemonId: number, daemonRestart: DaemonRestart): Promise<ApiResponse<void>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'restartDaemon');
        }
        if (daemonRestart === null || daemonRestart === undefined) {
            throw new ArgumentNullException('daemonRestart', 'restartDaemon');
        }
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}/restart' + (queryString? `?${queryString}` : '');

        const response = await this.post <void, DaemonRestart>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))), daemonRestart);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing Daemon
     * @param {number} daemonId The ID of the daemon.
     * @param {DaemonUpdate} daemonUpdate A JSON object containing the resource data
     */
    public async updateDaemon(daemonId: number, daemonUpdate: DaemonUpdate): Promise<ApiResponse<void>> {
        if (daemonId === null || daemonId === undefined) {
            throw new ArgumentNullException('daemonId', 'updateDaemon');
        }
        if (daemonUpdate === null || daemonUpdate === undefined) {
            throw new ArgumentNullException('daemonUpdate', 'updateDaemon');
        }
        let queryString = '';

        const requestUrl = '/daemons/{daemon_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, DaemonUpdate>(requestUrl.replace(`{${"daemon_id"}}`, encodeURIComponent(String(daemonId))), daemonUpdate);
        return new ApiResponse(response);
    }
}
