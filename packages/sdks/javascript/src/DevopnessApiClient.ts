import { ActionService } from './services/ActionService';
import { ApiBaseService, ConfigurationOptions, Configuration } from './services/ApiBaseService';
import { ApplicationService } from './services/ApplicationService';
import { CloudProviderCredentialService } from './services/CloudProviderCredentialService';
import { CredentialService } from './services/CredentialService';
import { CronJobService } from './services/CronJobService';
import { DaemonService } from './services/DaemonService';
import { EnvironmentService } from './services/EnvironmentService';
import { HookRequestService } from './services/HookRequestService';
import { HookService } from './services/HookService';
import { LogService } from './services/LogService';
import { NetworkRuleService } from './services/NetworkRuleService';
import { PipelineService } from './services/PipelineService';
import { ProjectService } from './services/ProjectService';
import { ResourceEventService } from './services/ResourceEventService';
import { ResourceLinkService } from './services/ResourceLinkService';
import { RoleService } from './services/RoleService';
import { ServerService } from './services/ServerService';
import { ServiceService } from './services/ServiceService';
import { SocialAccountService } from './services/SocialAccountService';
import { SourceProviderService } from './services/SourceProviderService'
import { SshKeyService } from './services/SshKeyService';
import { SslCertificateService } from './services/SslCertificateService';
import { StaticService } from './services/StaticService';
import { TeamInvitationService } from './services/TeamInvitationService';
import { TeamService } from './services/TeamService';
import { UserService } from './services/UserService';
import { VariableService } from './services/VariableService';

export class DevopnessApiClient {
  actions: ActionService;
  applications: ApplicationService;
  cloudProviderCredentials: CloudProviderCredentialService;
  credentials: CredentialService;
  cronjobs: CronJobService;
  daemons: DaemonService;
  environments: EnvironmentService;
  hookRequests: HookRequestService;
  hooks: HookService;
  logs: LogService;
  networkRules: NetworkRuleService;
  pipelines: PipelineService;
  projects: ProjectService;
  resourceEvents: ResourceEventService;
  resourceLinks: ResourceLinkService;
  roles: RoleService;
  servers: ServerService;
  services: ServiceService;
  socialAccounts: SocialAccountService;
  sourceProviders: SourceProviderService;
  sshKeys: SshKeyService;
  sslCertificates: SslCertificateService;
  static: StaticService;
  teamInvitations: TeamInvitationService;
  teams: TeamService;
  users: UserService;
  variables: VariableService;

  constructor(options?: ConfigurationOptions) {
    ApiBaseService.configuration = new Configuration(options || {});

    // we initialize the services explicitly, instead of auto initialize them on property declaration in the beginning of the class,
    // cause some (or all) of them depend on `ApiBaseService.configuration` property be set. Furthermore, we ensure all assertions
    // for non provided required parameters are quickly returned to the end user before spending time loading extra resources
    this.actions = new ActionService();
    this.applications = new ApplicationService();
    this.cloudProviderCredentials = new CloudProviderCredentialService();
    this.credentials = new CredentialService();
    this.cronjobs = new CronJobService();
    this.daemons = new DaemonService();
    this.environments = new EnvironmentService();
    this.hookRequests = new HookRequestService();
    this.hooks = new HookService();
    this.logs = new LogService();
    this.networkRules = new NetworkRuleService();
    this.pipelines = new PipelineService();
    this.projects = new ProjectService();
    this.resourceEvents = new ResourceEventService();
    this.resourceLinks = new ResourceLinkService();
    this.roles = new RoleService();
    this.servers = new ServerService();
    this.services = new ServiceService();
    this.socialAccounts = new SocialAccountService();
    this.sourceProviders = new SourceProviderService();
    this.sshKeys = new SshKeyService();
    this.sslCertificates = new SslCertificateService();
    this.static = new StaticService();
    this.teamInvitations = new TeamInvitationService();
    this.teams = new TeamService();
    this.users = new UserService();
    this.variables = new VariableService();
  }

  public get accessToken(): string {
    return ApiBaseService.accessToken;
  }

  public set accessToken(accessToken: string) {
    const MIN_TOKEN_LENGHT = 100;

    /**
     * As a complete access token validation rule might be too much to be implemented here, we
     * at least check for min length and return a substring of it to help users identify the
     * issue when first initializing this SDK from their apps
     */
    if (accessToken && accessToken.length < MIN_TOKEN_LENGHT) {
      throw new Error(`"${accessToken.substring(0, 10)} ..." doesn't seem to be a valid access token issued by Devopness API.`);
    }

    ApiBaseService.accessToken = accessToken;
  }
}
