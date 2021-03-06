/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const WebResource = msRest.WebResource;

/**
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getResourceProvisioning(ownerName, appName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/data/resource_provisioning';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  httpRequest.streamedResponse = true;
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }

    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 404 && statusCode !== 500) {
      let error = new Error(`Unexpected status code: ${statusCode}`);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        if (responseBody !== undefined) parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }

    // Create Result
    let result = response;
    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Creates Cosmos DB or attaches an existing one
 *
 * @param {string} acAuthorizationARM
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.provisionDatabaseParameters]
 *
 * @param {string} [options.provisionDatabaseParameters.subscriptionId]
 *
 * @param {string}
 * [options.provisionDatabaseParameters.databaseConnectionString]
 *
 * @param {string} [options.provisionDatabaseParameters.resourceRegion]
 * Possible values include: 'East Asia', 'Southeast Asia', 'Australia Central',
 * 'Australia Central 2', 'Australia East', 'Australia Southeast', 'Brazil
 * South', 'Canada Central', 'Canada East', 'Central India', 'South India',
 * 'West India', 'North Europe', 'West Europe', 'France Central', 'France
 * South', 'Germany Central', 'Germany Northeast', 'Japan East', 'Japan West',
 * 'Korea Central', 'Korea South', 'South Africa North', 'South Africa West',
 * 'UK South', 'UK West', 'Central US', 'East US', 'East US 2', 'US Gov
 * Arizona', 'US Gov Texas', 'North Central US', 'South Central US', 'West US',
 * 'West US 2', 'West Central US'
 *
 * @param {string} [options.provisionDatabaseParameters.database]
 *
 * @param {string} [options.provisionDatabaseParameters.collection]
 *
 * @param {number} [options.provisionDatabaseParameters.requestUnits]
 *
 * @param {string} [options.provisionDatabaseParameters.accountName]
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _postResourceProvisioning(acAuthorizationARM, ownerName, appName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let provisionDatabaseParameters = (options && options.provisionDatabaseParameters !== undefined) ? options.provisionDatabaseParameters : undefined;
  // Validate
  try {
    if (acAuthorizationARM === null || acAuthorizationARM === undefined || typeof acAuthorizationARM.valueOf() !== 'string') {
      throw new Error('acAuthorizationARM cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/data/resource_provisioning';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json-patch+json; charset=utf-8';
  if (acAuthorizationARM !== undefined && acAuthorizationARM !== null) {
    httpRequest.headers['AC-Authorization-ARM'] = acAuthorizationARM;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (provisionDatabaseParameters !== null && provisionDatabaseParameters !== undefined) {
      let requestModelMapper = new client.models['ProvisionDatabaseParameters']().mapper();
      requestModel = client.serialize(requestModelMapper, provisionDatabaseParameters, 'provisionDatabaseParameters');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(provisionDatabaseParameters, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 202 && statusCode !== 400 && statusCode !== 500) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 202) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PostResourceProvisioningAcceptedResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 400) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PostResourceProvisioningBadRequestResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError1 = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }
    // Deserialize Response
    if (statusCode === 500) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['PostResourceProvisioningInternalServerErrorResponse']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError2 = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError2.request = msRest.stripRequest(httpRequest);
        deserializationError2.response = msRest.stripResponse(response);
        return callback(deserializationError2);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Gets general data about the provisioned database
 *
 * @param {string} acAuthorizationARM ARM access token.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getOverview(acAuthorizationARM, ownerName, appName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (acAuthorizationARM === null || acAuthorizationARM === undefined || typeof acAuthorizationARM.valueOf() !== 'string') {
      throw new Error('acAuthorizationARM cannot be null or undefined and it must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/data/overview';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (acAuthorizationARM !== undefined && acAuthorizationARM !== null) {
    httpRequest.headers['AC-Authorization-ARM'] = acAuthorizationARM;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  httpRequest.streamedResponse = true;
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }

    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 500) {
      let error = new Error(`Unexpected status code: ${statusCode}`);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        if (responseBody !== undefined) parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }

    // Create Result
    let result = response;
    return callback(null, result, httpRequest, response);
  });
}

/**
 * @summary Checks that the Azure Cosmos DB account name already exists. A
 * valid account name may contain only lowercase letters, numbers, and the '-'
 * character, and must be between 3 and 31 characters.
 *
 * @param {string} acAuthorizationARM ARM token
 *
 * @param {string} accountName Account Name
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _checkNameExists(acAuthorizationARM, accountName, ownerName, appName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (acAuthorizationARM === null || acAuthorizationARM === undefined || typeof acAuthorizationARM.valueOf() !== 'string') {
      throw new Error('acAuthorizationARM cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (accountName !== null && accountName !== undefined) {
      if (accountName.length > 31)
      {
        throw new Error('"accountName" should satisfy the constraint - "MaxLength": 31');
      }
      if (accountName.length < 3)
      {
        throw new Error('"accountName" should satisfy the constraint - "MinLength": 3');
      }
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/data/database_account_names/{accountName}';
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'HEAD';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (acAuthorizationARM !== undefined && acAuthorizationARM !== null) {
    httpRequest.headers['AC-Authorization-ARM'] = acAuthorizationARM;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  httpRequest.streamedResponse = true;
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }

    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 400 && statusCode !== 401 && statusCode !== 404 && statusCode !== 500) {
      let error = new Error(`Unexpected status code: ${statusCode}`);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        if (responseBody !== undefined) parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }

    // Create Result
    let result = response;
    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a Data. */
class Data {
  /**
   * Create a Data.
   * @param {AppCenterClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._getResourceProvisioning = _getResourceProvisioning;
    this._postResourceProvisioning = _postResourceProvisioning;
    this._getOverview = _getOverview;
    this._checkNameExists = _checkNameExists;
  }

  /**
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getResourceProvisioningWithHttpOperationResponse(ownerName, appName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getResourceProvisioning(ownerName, appName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getResourceProvisioning(ownerName, appName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getResourceProvisioning(ownerName, appName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getResourceProvisioning(ownerName, appName, options, optionalCallback);
    }
  }

  /**
   * @summary Creates Cosmos DB or attaches an existing one
   *
   * @param {string} acAuthorizationARM
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.provisionDatabaseParameters]
   *
   * @param {string} [options.provisionDatabaseParameters.subscriptionId]
   *
   * @param {string}
   * [options.provisionDatabaseParameters.databaseConnectionString]
   *
   * @param {string} [options.provisionDatabaseParameters.resourceRegion]
   * Possible values include: 'East Asia', 'Southeast Asia', 'Australia Central',
   * 'Australia Central 2', 'Australia East', 'Australia Southeast', 'Brazil
   * South', 'Canada Central', 'Canada East', 'Central India', 'South India',
   * 'West India', 'North Europe', 'West Europe', 'France Central', 'France
   * South', 'Germany Central', 'Germany Northeast', 'Japan East', 'Japan West',
   * 'Korea Central', 'Korea South', 'South Africa North', 'South Africa West',
   * 'UK South', 'UK West', 'Central US', 'East US', 'East US 2', 'US Gov
   * Arizona', 'US Gov Texas', 'North Central US', 'South Central US', 'West US',
   * 'West US 2', 'West Central US'
   *
   * @param {string} [options.provisionDatabaseParameters.database]
   *
   * @param {string} [options.provisionDatabaseParameters.collection]
   *
   * @param {number} [options.provisionDatabaseParameters.requestUnits]
   *
   * @param {string} [options.provisionDatabaseParameters.accountName]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  postResourceProvisioningWithHttpOperationResponse(acAuthorizationARM, ownerName, appName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._postResourceProvisioning(acAuthorizationARM, ownerName, appName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Creates Cosmos DB or attaches an existing one
   *
   * @param {string} acAuthorizationARM
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.provisionDatabaseParameters]
   *
   * @param {string} [options.provisionDatabaseParameters.subscriptionId]
   *
   * @param {string}
   * [options.provisionDatabaseParameters.databaseConnectionString]
   *
   * @param {string} [options.provisionDatabaseParameters.resourceRegion]
   * Possible values include: 'East Asia', 'Southeast Asia', 'Australia Central',
   * 'Australia Central 2', 'Australia East', 'Australia Southeast', 'Brazil
   * South', 'Canada Central', 'Canada East', 'Central India', 'South India',
   * 'West India', 'North Europe', 'West Europe', 'France Central', 'France
   * South', 'Germany Central', 'Germany Northeast', 'Japan East', 'Japan West',
   * 'Korea Central', 'Korea South', 'South Africa North', 'South Africa West',
   * 'UK South', 'UK West', 'Central US', 'East US', 'East US 2', 'US Gov
   * Arizona', 'US Gov Texas', 'North Central US', 'South Central US', 'West US',
   * 'West US 2', 'West Central US'
   *
   * @param {string} [options.provisionDatabaseParameters.database]
   *
   * @param {string} [options.provisionDatabaseParameters.collection]
   *
   * @param {number} [options.provisionDatabaseParameters.requestUnits]
   *
   * @param {string} [options.provisionDatabaseParameters.accountName]
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  postResourceProvisioning(acAuthorizationARM, ownerName, appName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._postResourceProvisioning(acAuthorizationARM, ownerName, appName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._postResourceProvisioning(acAuthorizationARM, ownerName, appName, options, optionalCallback);
    }
  }

  /**
   * @summary Gets general data about the provisioned database
   *
   * @param {string} acAuthorizationARM ARM access token.
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getOverviewWithHttpOperationResponse(acAuthorizationARM, ownerName, appName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getOverview(acAuthorizationARM, ownerName, appName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Gets general data about the provisioned database
   *
   * @param {string} acAuthorizationARM ARM access token.
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getOverview(acAuthorizationARM, ownerName, appName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getOverview(acAuthorizationARM, ownerName, appName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getOverview(acAuthorizationARM, ownerName, appName, options, optionalCallback);
    }
  }

  /**
   * @summary Checks that the Azure Cosmos DB account name already exists. A
   * valid account name may contain only lowercase letters, numbers, and the '-'
   * character, and must be between 3 and 31 characters.
   *
   * @param {string} acAuthorizationARM ARM token
   *
   * @param {string} accountName Account Name
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  checkNameExistsWithHttpOperationResponse(acAuthorizationARM, accountName, ownerName, appName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._checkNameExists(acAuthorizationARM, accountName, ownerName, appName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Checks that the Azure Cosmos DB account name already exists. A
   * valid account name may contain only lowercase letters, numbers, and the '-'
   * character, and must be between 3 and 31 characters.
   *
   * @param {string} acAuthorizationARM ARM token
   *
   * @param {string} accountName Account Name
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  checkNameExists(acAuthorizationARM, accountName, ownerName, appName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._checkNameExists(acAuthorizationARM, accountName, ownerName, appName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._checkNameExists(acAuthorizationARM, accountName, ownerName, appName, options, optionalCallback);
    }
  }

}

module.exports = Data;
