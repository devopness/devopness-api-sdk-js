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
 * The object of target defining how the variable key/value pair will be deployed
 * @export
 * @interface VariableTargets
 */
export interface VariableTargets {
    /**
     * The variable target name
     * @type {string}
     * @memberof VariableTargets
     */
    name?: VariableTargetsNameEnum;
    /**
     * Human readable version of the variable target name
     * @type {string}
     * @memberof VariableTargets
     */
    name_human_readable?: string;
    /**
     * Descriptive text to help users to know what data is stored in the field and optional extra information on how to enter data to the field
     * @type {string}
     * @memberof VariableTargets
     */
    hint?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum VariableTargetsNameEnum {
    ResourceConfigFile = 'resource-config-file',
    NginxHttpServer = 'nginx-http-server',
    MyCnf = 'my-cnf',
    NewrelicInfraYml = 'newrelic-infra-yml',
    NginxConf = 'nginx-conf',
    NginxMain = 'nginx-main',
    NginxHttp = 'nginx-http',
    OsEnvVar = 'os-env-var',
    PhpCliPhpIni = 'php-cli_php-ini',
    PhpFpmPhpFpmConf = 'php-fpm_php-fpm-conf',
    PhpFpmPhpIni = 'php-fpm_php-ini',
    PhpFpmPoolDWwwConf = 'php-fpm_pool-d-www-conf',
    RedisConf = 'redis-conf',
    SupervisordConf = 'supervisord-conf',
    SysctlConf = 'sysctl-conf'
}


