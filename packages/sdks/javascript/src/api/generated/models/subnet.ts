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
import { CredentialRelation } from './credential-relation';
import { EnvironmentRelation } from './environment-relation';
import { NetworkRelation } from './network-relation';
import { ProjectRelation } from './project-relation';
import { SubnetProvisionInput } from './subnet-provision-input';
import { SubnetType } from './subnet-type';
import { UserRelation } from './user-relation';

/**
 * 
 * @export
 * @interface Subnet
 */
export interface Subnet {
    /**
     * The unique id of the given record
     * @type {number}
     * @memberof Subnet
     */
    id: number;
    /**
     * The subnet\'s name
     * @type {string}
     * @memberof Subnet
     */
    name: string;
    /**
     * 
     * @type {SubnetType}
     * @memberof Subnet
     */
    type: SubnetType;
    /**
     * True if this subnet is auto-generated or false if this was created by the user
     * @type {boolean}
     * @memberof Subnet
     */
    is_auto_generated: boolean;
    /**
     * 
     * @type {SubnetProvisionInput}
     * @memberof Subnet
     */
    provision_input: SubnetProvisionInput;
    /**
     * 
     * @type {UserRelation}
     * @memberof Subnet
     */
    created_by_user: UserRelation;
    /**
     * 
     * @type {ProjectRelation}
     * @memberof Subnet
     */
    project: ProjectRelation | null;
    /**
     * 
     * @type {EnvironmentRelation}
     * @memberof Subnet
     */
    environment: EnvironmentRelation | null;
    /**
     * 
     * @type {NetworkRelation}
     * @memberof Subnet
     */
    network: NetworkRelation | null;
    /**
     * 
     * @type {CredentialRelation}
     * @memberof Subnet
     */
    credential: CredentialRelation | null;
    /**
     * 
     * @type {ActionRelation}
     * @memberof Subnet
     */
    last_action: ActionRelation | null;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof Subnet
     */
    created_at: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof Subnet
     */
    updated_at: string;
}

