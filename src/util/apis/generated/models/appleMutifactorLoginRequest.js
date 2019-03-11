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
class AppleMutifactorLoginRequest {
  /**
   * Create a AppleMutifactorLoginRequest.
   * @member {string} username The username for the Apple Developer account.
   * @member {string} authcode This is the six digit OTP used for completing
   * the multi-factor authentication
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleMutifactorLoginRequest
   *
   * @returns {object} metadata of AppleMutifactorLoginRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleMutifactorLoginRequest',
      type: {
        name: 'Composite',
        className: 'AppleMutifactorLoginRequest',
        modelProperties: {
          username: {
            required: true,
            serializedName: 'username',
            type: {
              name: 'String'
            }
          },
          authcode: {
            required: true,
            serializedName: 'authcode',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleMutifactorLoginRequest;
