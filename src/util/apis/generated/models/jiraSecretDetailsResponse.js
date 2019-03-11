/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Jira secret details
 *
 */
class JiraSecretDetailsResponse {
  /**
   * Create a JiraSecretDetailsResponse.
   * @member {string} baseUrl baseUrl to connect to jira instance
   * @member {string} username username to connect to jira instance
   */
  constructor() {
  }

  /**
   * Defines the metadata of JiraSecretDetailsResponse
   *
   * @returns {object} metadata of JiraSecretDetailsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'JiraSecretDetailsResponse',
      type: {
        name: 'Composite',
        className: 'JiraSecretDetailsResponse',
        modelProperties: {
          baseUrl: {
            required: true,
            serializedName: 'baseUrl',
            type: {
              name: 'String'
            }
          },
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = JiraSecretDetailsResponse;
