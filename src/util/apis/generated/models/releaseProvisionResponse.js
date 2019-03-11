/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Response for provisioning a release
 *
 */
class ReleaseProvisionResponse {
  /**
   * Create a ReleaseProvisionResponse.
   * @member {string} [statusUrl] The url to check provisioning status.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReleaseProvisionResponse
   *
   * @returns {object} metadata of ReleaseProvisionResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReleaseProvisionResponse',
      type: {
        name: 'Composite',
        className: 'ReleaseProvisionResponse',
        modelProperties: {
          statusUrl: {
            required: false,
            serializedName: 'status_url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ReleaseProvisionResponse;
