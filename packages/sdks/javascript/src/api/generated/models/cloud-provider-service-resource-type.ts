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


import { CloudProviderInputSettings } from './cloud-provider-input-settings';
import { CloudProviderServiceResourceTypeScope } from './cloud-provider-service-resource-type-scope';
import { OperatingSystem } from './operating-system';
import { OperationCustomSettings } from './operation-custom-settings';

/**
 * Resource type details
 * @export
 * @interface CloudProviderServiceResourceType
 */
export interface CloudProviderServiceResourceType {
    /**
     * The resource type\'s name on the cloud provider
     * @type {string}
     * @memberof CloudProviderServiceResourceType
     */
    provider_resource_type: string;
    /**
     * The resource type\'s name on Devopness
     * @type {string}
     * @memberof CloudProviderServiceResourceType
     */
    devopness_resource_type: string;
    /**
     * 
     * @type {CloudProviderServiceResourceTypeScope}
     * @memberof CloudProviderServiceResourceType
     */
    scope: CloudProviderServiceResourceTypeScope;
    /**
     * Settings of the cloud provider credential
     * @type {Array<CloudProviderInputSettings>}
     * @memberof CloudProviderServiceResourceType
     */
    input_settings: Array<CloudProviderInputSettings>;
    /**
     * 
     * @type {Array<OperatingSystem>}
     * @memberof CloudProviderServiceResourceType
     */
    os?: Array<OperatingSystem>;
    /**
     * Tells if this cloud service allows keeping server\'s persistent disks after a server is deleted. If true, Devopness API will allow users to send a parameter when deleting a server to indicate if the server persistent disks must be retained, keeping data in the disk volumes - possibly incurring extra costs on the user\'s cloud provider account. For cloud services that do not support this option, server disks will always be deleted when a server is deleted.
     * @type {boolean}
     * @memberof CloudProviderServiceResourceType
     */
    can_keep_disk_after_delete_server?: boolean;
    /**
     * 
     * @type {OperationCustomSettings}
     * @memberof CloudProviderServiceResourceType
     */
    operation_custom_settings?: OperationCustomSettings;
}

