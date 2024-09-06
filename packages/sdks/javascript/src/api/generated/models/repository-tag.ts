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


import { RepositoryTagCommit } from './repository-tag-commit';

/**
 * A repository tag
 * @export
 * @interface RepositoryTag
 */
export interface RepositoryTag {
    /**
     * The name of the tag
     * @type {string}
     * @memberof RepositoryTag
     */
    name: string;
    /**
     * 
     * @type {RepositoryTagCommit}
     * @memberof RepositoryTag
     */
    commit: RepositoryTagCommit;
}
