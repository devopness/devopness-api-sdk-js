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
import { Step } from '../../generated/models';
import { StepPipelineCreate } from '../../generated/models';
import { StepPipelineUpdate } from '../../generated/models';

/**
 * PipelinesStepsApiService - Auto-generated
 */
export class PipelinesStepsApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a step to a pipeline
     * @param {number} pipelineId The ID of the pipeline.
     * @param {StepPipelineCreate} stepPipelineCreate A JSON object containing the resource data
     */
    public async addPipelineStep(pipelineId: number, stepPipelineCreate: StepPipelineCreate): Promise<ApiResponse<Step>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'addPipelineStep');
        }
        if (stepPipelineCreate === null || stepPipelineCreate === undefined) {
            throw new ArgumentNullException('stepPipelineCreate', 'addPipelineStep');
        }
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}/steps' + (queryString? `?${queryString}` : '');

        const response = await this.post <Step, StepPipelineCreate>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))), stepPipelineCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Link a step to a Pipeline
     * @param {number} pipelineId The ID of the pipeline.
     * @param {number} stepId The ID of the step.
     */
    public async linkStepToPipeline(pipelineId: number, stepId: number): Promise<ApiResponse<void>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'linkStepToPipeline');
        }
        if (stepId === null || stepId === undefined) {
            throw new ArgumentNullException('stepId', 'linkStepToPipeline');
        }
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}/steps/{step_id}/link' + (queryString? `?${queryString}` : '');

        const response = await this.post <void>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))).replace(`{${"step_id"}}`, encodeURIComponent(String(stepId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Unlink a step from a Pipeline
     * @param {number} pipelineId The ID of the pipeline.
     * @param {number} stepId The ID of the step.
     */
    public async unlinkStepFromPipeline(pipelineId: number, stepId: number): Promise<ApiResponse<void>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'unlinkStepFromPipeline');
        }
        if (stepId === null || stepId === undefined) {
            throw new ArgumentNullException('stepId', 'unlinkStepFromPipeline');
        }
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}/steps/{step_id}/unlink' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))).replace(`{${"step_id"}}`, encodeURIComponent(String(stepId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing Pipeline Step
     * @param {number} pipelineId The ID of the pipeline.
     * @param {number} stepId The ID of the step.
     * @param {StepPipelineUpdate} stepPipelineUpdate A JSON object containing the resource data
     */
    public async updatePipelineStep(pipelineId: number, stepId: number, stepPipelineUpdate: StepPipelineUpdate): Promise<ApiResponse<void>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'updatePipelineStep');
        }
        if (stepId === null || stepId === undefined) {
            throw new ArgumentNullException('stepId', 'updatePipelineStep');
        }
        if (stepPipelineUpdate === null || stepPipelineUpdate === undefined) {
            throw new ArgumentNullException('stepPipelineUpdate', 'updatePipelineStep');
        }
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}/steps/{step_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, StepPipelineUpdate>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))).replace(`{${"step_id"}}`, encodeURIComponent(String(stepId))), stepPipelineUpdate);
        return new ApiResponse(response);
    }
}
