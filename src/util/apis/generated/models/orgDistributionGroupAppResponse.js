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

const models = require('./index');

/**
 * Class representing a OrgDistributionGroupAppResponse.
 * @extends models['BasicAppResponse']
 */
class OrgDistributionGroupAppResponse extends models['BasicAppResponse'] {
  /**
   * Create a OrgDistributionGroupAppResponse.
   * @property {string} [platform] The platform of the app
   * @property {string} [origin] The creation origin of this app
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OrgDistributionGroupAppResponse
   *
   * @returns {object} metadata of OrgDistributionGroupAppResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OrgDistributionGroupAppResponse',
      type: {
        name: 'Composite',
        className: 'OrgDistributionGroupAppResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          environment: {
            required: false,
            serializedName: 'environment',
            type: {
              name: 'String'
            }
          },
          iconUrl: {
            required: false,
            serializedName: 'icon_url',
            type: {
              name: 'String'
            }
          },
          iconSource: {
            required: false,
            serializedName: 'icon_source',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          os: {
            required: true,
            serializedName: 'os',
            type: {
              name: 'String'
            }
          },
          owner: {
            required: true,
            serializedName: 'owner',
            type: {
              name: 'Composite',
              className: 'Owner'
            }
          },
          platform: {
            required: false,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OrgDistributionGroupAppResponse;
