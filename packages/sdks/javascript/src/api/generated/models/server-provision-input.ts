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


import { CloudServiceSettingsAwsEc2 } from './cloud-service-settings-aws-ec2';
import { CloudServiceSettingsDigitalOceanDroplet } from './cloud-service-settings-digital-ocean-droplet';
import { CloudServiceSettingsGcpGce } from './cloud-service-settings-gcp-gce';
import { CloudServiceSettingsSelfHostedCustom } from './cloud-service-settings-self-hosted-custom';
import { ServerCloudServiceCode } from './server-cloud-service-code';

/**
 * Configuration used to launch cloud instance
 * @export
 * @interface ServerProvisionInput
 */
export interface ServerProvisionInput {
    /**
     * The unique id of the cloud provider credential to be used on connect to cloud provider
     * @type {number}
     * @memberof ServerProvisionInput
     */
    credential_id?: number;
    /**
     * The ID of the subnet where to create the server. If not defined, create the server on the default subnet of the cloud provider
     * @type {number}
     * @memberof ServerProvisionInput
     */
    subnet_id?: number;
    /**
     * 
     * @type {ServerCloudServiceCode}
     * @memberof ServerProvisionInput
     */
    cloud_service_code: ServerCloudServiceCode;
    /**
     * The configurations used to cloud service
     * @type {CloudServiceSettingsAwsEc2 | CloudServiceSettingsDigitalOceanDroplet | CloudServiceSettingsGcpGce | CloudServiceSettingsSelfHostedCustom}
     * @memberof ServerProvisionInput
     */
    settings?: CloudServiceSettingsAwsEc2 | CloudServiceSettingsDigitalOceanDroplet | CloudServiceSettingsGcpGce | CloudServiceSettingsSelfHostedCustom;
}

