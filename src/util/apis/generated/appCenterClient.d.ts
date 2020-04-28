/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

export default class AppCenterClient extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the AppCenterClient class.
   * @constructor
   *
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: ServiceClientCredentials, baseUri?: string, options?: ServiceClientOptions);

  credentials: ServiceClientCredentials;

  // Operation groups
  appApiTokens: operations.AppApiTokens;
  devices: operations.Devices;
  notifications: operations.Notifications;
  users: operations.Users;
  orgInvitations: operations.OrgInvitations;
  distributionGroupInvitations: operations.DistributionGroupInvitations;
  appInvitations: operations.AppInvitations;
  sharedconnection: operations.Sharedconnection;
  dataSubjectRight: operations.DataSubjectRight;
  releasesOperations: operations.ReleasesOperations;
  appsOperations: operations.AppsOperations;
  distributionGroups: operations.DistributionGroups;
  teams: operations.Teams;
  azureSubscription: operations.AzureSubscription;
  organizationOperations: operations.OrganizationOperations;
  organizations: operations.Organizations;
  billingAggregatedInformation: operations.BillingAggregatedInformation;
  legacyCodePushAcquisition: operations.LegacyCodePushAcquisition;
  invitations: operations.Invitations;
  builds: operations.Builds;
  webhooks: operations.Webhooks;
  crashes: operations.Crashes;
  test: operations.Test;
  symbols: operations.Symbols;
  symbolUploads: operations.SymbolUploads;
  storeNotifications: operations.StoreNotifications;
  repositories: operations.Repositories;
  repositoryConfigurations: operations.RepositoryConfigurations;
  provisioning: operations.Provisioning;
  releaseUploads: operations.ReleaseUploads;
  push: operations.Push;
  fileAssets: operations.FileAssets;
  exportConfigurations: operations.ExportConfigurations;
  errors: operations.Errors;
  storeReleases: operations.StoreReleases;
  storeReleasePublishLogs: operations.StoreReleasePublishLogs;
  stores: operations.Stores;
  missingSymbolGroups: operations.MissingSymbolGroups;
  appOperations: operations.AppOperations;
  codePushDeploymentUpload: operations.CodePushDeploymentUpload;
  codePushDeploymentRelease: operations.CodePushDeploymentRelease;
  deploymentReleases: operations.DeploymentReleases;
  codePushDeploymentReleases: operations.CodePushDeploymentReleases;
  codePushDeployments: operations.CodePushDeployments;
  codePushDeploymentMetrics: operations.CodePushDeploymentMetrics;
  data: operations.Data;
  crashGroupsOperations: operations.CrashGroupsOperations;
  commits: operations.Commits;
  bugTracker: operations.BugTracker;
  branchConfigurations: operations.BranchConfigurations;
  identity: operations.Identity;
  appleMapping: operations.AppleMapping;
  analytics: operations.Analytics;
  apiTokens: operations.ApiTokens;
}

export { AppCenterClient, models as AppCenterModels };
