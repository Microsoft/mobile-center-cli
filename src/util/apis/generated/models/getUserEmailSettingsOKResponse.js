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
 * Alerting Default Email Settings of the user
 *
 */
class GetUserEmailSettingsOKResponse {
  /**
   * Create a GetUserEmailSettingsOKResponse.
   * @property {string} requestId Unique request identifier for tracking
   * @property {string} [eTag] The ETag of the entity
   * @property {boolean} enabled Allows to forcefully disable emails on app or
   * user level
   * @property {string} [userId] The unique id (UUID) of the user
   * @property {array} settings The settings the user has for the app
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetUserEmailSettingsOKResponse
   *
   * @returns {object} metadata of GetUserEmailSettingsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetUserEmailSettingsOKResponse',
      type: {
        name: 'Composite',
        className: 'GetUserEmailSettingsOKResponse',
        modelProperties: {
          requestId: {
            required: true,
            serializedName: 'request_id',
            type: {
              name: 'String'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          enabled: {
            required: true,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          userId: {
            required: false,
            serializedName: 'userId',
            type: {
              name: 'String'
            }
          },
          settings: {
            required: true,
            serializedName: 'settings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GetUserEmailSettingsOKResponseSettingsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GetUserEmailSettingsOKResponseSettingsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetUserEmailSettingsOKResponse;
