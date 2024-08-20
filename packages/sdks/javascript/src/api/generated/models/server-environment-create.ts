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


import { BlueprintService } from './blueprint-service';
import { ServerProvisionInput } from './server-provision-input';

/**
 * 
 * @export
 * @interface ServerEnvironmentCreate
 */
export interface ServerEnvironmentCreate {
    /**
     * The hostname to be set on Linux servers. Accepts numbers (0-9), dash (-) and lower case non accented characters. Must not be greater than 60 characters.
     * @type {string}
     * @memberof ServerEnvironmentCreate
     */
    hostname: string;
    /**
     * Public ipv4 address for server access. This field is required when <code>provision_input.cloud_service_code</code> is <code>self-hosted-custom</code>.
     * @type {string}
     * @memberof ServerEnvironmentCreate
     */
    ip_address?: string;
    /**
     * The network port to which the SSH daemon is listening to SSH connections on the server. This field is required when <code>provision_input.cloud_service_code</code> is <code>self-hosted-custom</code>. Must be between 22 and 65535.
     * @type {number}
     * @memberof ServerEnvironmentCreate
     */
    ssh_port?: number;
    /**
     * Maximum number of actions that can run in parallel on this server. `0` means no limit of simultaneous actions. `1` means just a single action will be started at a time to run on this server. Must be between 0 and 10.
     * @type {number}
     * @memberof ServerEnvironmentCreate
     */
    max_parallel_actions?: number;
    /**
     * The service names and their respective versions for a blueprint.
     * @type {Array<BlueprintService>}
     * @memberof ServerEnvironmentCreate
     */
    blueprint?: Array<BlueprintService>;
    /**
     * 
     * @type {ServerProvisionInput}
     * @memberof ServerEnvironmentCreate
     */
    provision_input: ServerProvisionInput;
    /**
     * The ID of the cloud credential. This field is required unless <code>provision_input.cloud_service_code</code> is in <code>self-hosted-custom</code>.
     * @type {string}
     * @memberof ServerEnvironmentCreate
     */
    credential_id?: string;
}

