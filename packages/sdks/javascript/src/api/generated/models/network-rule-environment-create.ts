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


import { NetworkRuleDirection } from './network-rule-direction';
import { NetworkRuleProtocol } from './network-rule-protocol';

/**
 * 
 * @export
 * @interface NetworkRuleEnvironmentCreate
 */
export interface NetworkRuleEnvironmentCreate {
    /**
     * The rule\'s name/description/reminder. Must be at least 3 characters. Must not be greater than 60 characters.
     * @type {string}
     * @memberof NetworkRuleEnvironmentCreate
     */
    name: string;
    /**
     * 
     * @type {NetworkRuleDirection}
     * @memberof NetworkRuleEnvironmentCreate
     */
    direction: NetworkRuleDirection;
    /**
     * 
     * @type {NetworkRuleProtocol}
     * @memberof NetworkRuleEnvironmentCreate
     */
    protocol?: NetworkRuleProtocol;
    /**
     * IP address range this rule applies for, defined using CIDR notation.
     * @type {string}
     * @memberof NetworkRuleEnvironmentCreate
     */
    cidr_block: string;
    /**
     * Network port to be considered by this rule. Must be at least 1. Must not be greater than 65535.
     * @type {number}
     * @memberof NetworkRuleEnvironmentCreate
     */
    port: number;
}

