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



/**
 * 
 * @export
 * @interface ScriptRunner
 */
export interface ScriptRunner {
    /**
     * How to call the runner in CLI
     * @type {string}
     * @memberof ScriptRunner
     */
    value: string;
    /**
     * The formatted name of the runner
     * @type {string}
     * @memberof ScriptRunner
     */
    human_readable: string;
    /**
     * Descriptive text to help users to know what data is stored in the field and optional extra information on how to enter data to the field
     * @type {string}
     * @memberof ScriptRunner
     */
    hint: string;
}
