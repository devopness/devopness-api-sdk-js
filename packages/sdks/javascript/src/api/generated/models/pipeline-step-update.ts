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


import { PipelineStepRunnerName } from './pipeline-step-runner-name';

/**
 * 
 * @export
 * @interface PipelineStepUpdate
 */
export interface PipelineStepUpdate {
    /**
     * The ID of the pipeline step
     * @type {number}
     * @memberof PipelineStepUpdate
     */
    id: number;
    /**
     * Name/short description of the script
     * @type {string}
     * @memberof PipelineStepUpdate
     */
    name: string;
    /**
     * A command line or multiline bash script
     * @type {string}
     * @memberof PipelineStepUpdate
     */
    command: string;
    /**
     * 
     * @type {PipelineStepRunnerName}
     * @memberof PipelineStepUpdate
     */
    runner: PipelineStepRunnerName;
    /**
     * The name of the Unix user on behalf of which the script will be executed
     * @type {string}
     * @memberof PipelineStepUpdate
     */
    run_as_user?: string;
    /**
     * Repositions the pipeline step after the step with the given `trigger_order`
     * @type {number}
     * @memberof PipelineStepUpdate
     */
    trigger_after?: number;
}

