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


import { DeploymentType } from './deployment-type';
import { SourceType } from './source-type';

/**
 * 
 * @export
 * @interface ActionDeploymentContent
 */
export interface ActionDeploymentContent {
    /**
     * 
     * @type {DeploymentType}
     * @memberof ActionDeploymentContent
     */
    type: DeploymentType;
    /**
     * 
     * @type {SourceType}
     * @memberof ActionDeploymentContent
     */
    source_type: SourceType;
    /**
     * A git reference pointing to a commit in a source provider repository from which the application source code will be retrieved and deployed. It can be a branch name, tag name or a specific commit hash.
     * @type {string}
     * @memberof ActionDeploymentContent
     */
    source_ref: string;
    /**
     * The repository of the deployed application
     * @type {string}
     * @memberof ActionDeploymentContent
     */
    repository: string;
    /**
     * The ID of the source provider
     * @type {number}
     * @memberof ActionDeploymentContent
     */
    provider_id: number;
    /**
     * The source provider\'s name
     * @type {string}
     * @memberof ActionDeploymentContent
     */
    provider_name: string;
    /**
     * The ID of the pipeline
     * @type {number}
     * @memberof ActionDeploymentContent
     */
    pipeline_id: number;
}
