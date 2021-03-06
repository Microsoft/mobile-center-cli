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

/**
 * Google Play connection secrets this should be the JSON file data which is
 * provided by google play
 *
 */
class GooglePlayConnectionSecretRequest {
  /**
   * Create a GooglePlayConnectionSecretRequest.
   * @property {string} [displayName] display name of shared connection
   * @property {string} serviceType service type of shared connection can be
   * apple|gitlab|googleplay|jira|applecertificate. Possible values include:
   * 'apple', 'jira', 'googleplay', 'gitlab'
   * @property {string} [credentialType] credential type of the shared
   * connection. Values can be credentials|certificate. Possible values
   * include: 'credentials', 'certificate'. Default value: 'credentials' .
   * @property {object} data google secret details
   */
  constructor() {
  }

  /**
   * Defines the metadata of GooglePlayConnectionSecretRequest
   *
   * @returns {object} metadata of GooglePlayConnectionSecretRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'googleplay',
      type: {
        name: 'Composite',
        className: 'GooglePlayConnectionSecretRequest',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            type: {
              name: 'String'
            }
          },
          credentialType: {
            required: false,
            serializedName: 'credentialType',
            defaultValue: 'credentials',
            type: {
              name: 'String'
            }
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = GooglePlayConnectionSecretRequest;
