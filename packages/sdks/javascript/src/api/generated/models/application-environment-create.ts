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


import { ApplicationType } from './application-type';

/**
 * 
 * @export
 * @interface ApplicationEnvironmentCreate
 */
export interface ApplicationEnvironmentCreate {
    /**
     * The application\'s unique name. Must not be greater than 60 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    name: string;
    /**
     * 
     * @type {ApplicationType}
     * @memberof ApplicationEnvironmentCreate
     */
    type: ApplicationType;
    /**
     * The domain or sub-domain through which the application deployed with these settings will be accessible. It can be a naked domain or any subdomain. If app has domain names `testing.my-app.com`, `staging.my-app.com` and `www.my-app.com` a possible good candidate for the application name would be the \"naked\" domain `my-app.com`. Must not be greater than 60 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    domain_name?: string;
    /**
     * The optional command that should be executed once during deployment to build the source code and get the application in a ready state. Must be at least 10 characters. Must not be greater than 300 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    build_command?: string;
    /**
     * The language runtime engine version to be used to execute this application on the deployed servers. Must be one of <code></code> Must be at least 1 characters. Must not be greater than 10 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    engine_version: string;
    /**
     * The base framework on top of which the application has been implemented - it might have impact on the steps to be performed during application deployment. Must not be greater than 30 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    framework: string;
    /**
     * The programming language runtime environment to be used to serve the application. E.g.: if a front-end web app is developed using Node.js, but should be served statically (a SPA application, for instance) then this field value should be `html`. Must be one of <code>docker</code>, <code>dotnetcore</code>, <code>html</code>, <code>java</code>, <code>nodejs</code>, <code>php</code>, or <code>python</code> Must not be greater than 30 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    programming_language: string;
    /**
     * Required for CGI|FastCGI|SCGI|WSGI based applications or `docker` containerized applications. It tells `devopness` the private address at which the application listens to external calls.The address has `http` or `https` protocol, an domain name or IP address, optional port and optional path. Or you can specify a UNIX-socket using `unix:` prefix after protocol.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    listening_address?: string;
    /**
     * The full name of a repository (`repository_owner/repository_name`) containing the application source code. Required when the `source_provider_id` field is informed. Must not be greater than 100 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    repository: string;
    /**
     * Numeric ID of the source provider account where the repository is hosted. Required when the `repository` field is informed.
     * @type {number}
     * @memberof ApplicationEnvironmentCreate
     */
    source_provider_id: number;
    /**
     * The relative directory where package manager\'s manifest files (`package.json`, `composer.json`, `yarn.lock`, etc) are located. It needs to be set for applications where the actual source code is not located in the top level directory of the repository. Must start with one of <code>/</code>.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    root_directory?: string;
    /**
     * The relative web directory where publicly accessible assets are located and the web content should be served from. Must start with one of <code>/</code>.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    public_directory: string;
    /**
     * The version control branch that, by default, will be used when a deployment is triggered and no other branch name is informed. Must not be greater than 200 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    default_branch: string;
    /**
     * The number of deployment history, logs and artifacts to keep stored in both devopness servers and user\'s servers. OR The number of deployment artifacts to be retained in the user\'s servers, making it easier and faster to rollback to previous versions. Must be at least 1. Must not be greater than 10.
     * @type {number}
     * @memberof ApplicationEnvironmentCreate
     */
    deployments_keep?: number;
    /**
     * The entrypoint tells devopness how an application should be started and has basically two forms: 1) `File`: if it\'s a simple file name/path a web app will be served using the entrypoint value as its index file. Example: `index.html` 2) `Command`: if a command line instruction is provided as the entrypoint value, it will be handled as the start up command that initializes the application. It will be assumed that the user is an advanced user that knows what she/he is doing, therefore the command specified here will be run - as is - every time the application needs to be started. Must not be greater than 120 characters.
     * @type {string}
     * @memberof ApplicationEnvironmentCreate
     */
    entrypoint: string;
    /**
     * Indicates if at deployment time Devopness should execute package manager commands to install dependencies used in development mode.
     * @type {boolean}
     * @memberof ApplicationEnvironmentCreate
     */
    install_dependencies_dev: boolean;
    /**
     * Indicates if at deployment time Devopness should execute package manager commands to install dependencies used in production mode.
     * @type {boolean}
     * @memberof ApplicationEnvironmentCreate
     */
    install_dependencies_prod: boolean;
    /**
     * Indicates if push to deploy webhooks are enabled for this application. If enabled an app deployment will be automatically triggered when new changes are committed to the `default_branch`.
     * @type {boolean}
     * @memberof ApplicationEnvironmentCreate
     */
    push_to_deploy?: boolean;
    /**
     * Indicates if the application requires a daemon to keep it alive.
     * @type {boolean}
     * @memberof ApplicationEnvironmentCreate
     */
    requires_daemon: boolean;
}

