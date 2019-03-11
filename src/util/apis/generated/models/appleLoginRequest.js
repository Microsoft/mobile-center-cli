/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Apple credentials needed to log into the Apple Developer Portal
 *
 */
class AppleLoginRequest {
  /**
   * Create a AppleLoginRequest.
   * @member {string} username The username for the Apple Developer account.
   * @member {string} password The password for the Apple Developer account.
   * @member {string} [teamIdentifier] Identifier of the team to use when
   * logged in.
   * @member {string} [cookie] The 30-day session cookie for multi-factor
   * authentication backed accounts.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleLoginRequest
   *
   * @returns {object} metadata of AppleLoginRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleLoginRequest',
      type: {
        name: 'Composite',
        className: 'AppleLoginRequest',
        modelProperties: {
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          password: {
            required: true,
            serializedName: 'password',
            type: {
              name: 'String'
            }
          },
          teamIdentifier: {
            required: false,
            serializedName: 'team_identifier',
            type: {
              name: 'String'
            }
          },
          cookie: {
            required: false,
            serializedName: 'cookie',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleLoginRequest;
