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


import { VariableTarget } from './variable-target';
import { VariableType } from './variable-type';

/**
 * 
 * @export
 * @interface VariableRelation
 */
export interface VariableRelation {
    /**
     * The ID of the given variable
     * @type {number}
     * @memberof VariableRelation
     */
    id: number;
    /**
     * The unique key used to identify the variable on the target
     * @type {string}
     * @memberof VariableRelation
     */
    key: string;
    /**
     * 
     * @type {VariableType}
     * @memberof VariableRelation
     */
    type: VariableType;
    /**
     * A text describing the variable, provided by the end user
     * @type {string}
     * @memberof VariableRelation
     */
    description: string | null;
    /**
     * The value to be assigned to this variable when deployed to its target
     * @type {string}
     * @memberof VariableRelation
     */
    value: string;
    /**
     * 
     * @type {VariableTarget}
     * @memberof VariableRelation
     */
    target: VariableTarget;
    /**
     * The target name of this variable
     * @type {string}
     * @memberof VariableRelation
     */
    target_name: string | null;
    /**
     * The ID of the resource this variable is linked to
     * @type {number}
     * @memberof VariableRelation
     */
    resource_id: number | null;
    /**
     * The name of the resource this variable is linked to
     * @type {string}
     * @memberof VariableRelation
     */
    resource_type: string;
    /**
     * Indicates if the variable value should be visible or not in the deployment logs
     * @type {boolean}
     * @memberof VariableRelation
     */
    hidden: boolean;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof VariableRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof VariableRelation
     */
    updated_at: string;
}

