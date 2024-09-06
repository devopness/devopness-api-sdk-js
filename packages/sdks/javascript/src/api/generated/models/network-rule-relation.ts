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


import { ActionRelation } from './action-relation';
import { NetworkRuleDirection } from './network-rule-direction';
import { NetworkRuleProtocol } from './network-rule-protocol';

/**
 * 
 * @export
 * @interface NetworkRuleRelation
 */
export interface NetworkRuleRelation {
    /**
     * The ID of the given network rule
     * @type {number}
     * @memberof NetworkRuleRelation
     */
    id: number;
    /**
     * The rule\'s name/description/reminder
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    name: string;
    /**
     * 
     * @type {NetworkRuleDirection}
     * @memberof NetworkRuleRelation
     */
    direction: NetworkRuleDirection;
    /**
     * 
     * @type {NetworkRuleProtocol}
     * @memberof NetworkRuleRelation
     */
    protocol: NetworkRuleProtocol;
    /**
     * Network port to be considered by this rule
     * @type {number}
     * @memberof NetworkRuleRelation
     */
    port: number;
    /**
     * IP address range this rule applies for, defined using CIDR notation
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    cidr_block: string;
    /**
     * Indicates if the network rule was auto_generated by `devopness` itself
     * @type {boolean}
     * @memberof NetworkRuleRelation
     */
    auto_generated: boolean;
    /**
     * 
     * @type {ActionRelation}
     * @memberof NetworkRuleRelation
     */
    last_action: ActionRelation | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof NetworkRuleRelation
     */
    updated_at: string;
}
