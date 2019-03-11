/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Apple secret details
 *
 */
class AppleMultifactorSecretDetails {
  /**
   * Create a AppleMultifactorSecretDetails.
   * @member {string} username username to connect to apple store.
   * @member {string} password password to connect to apple store.
   * @member {string} authCode The 6 digit Apple OTP for Multifactor accounts
   * @member {string} [appSpecificPassword] The app specific password required
   * for app publishing for 2FA accounts
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppleMultifactorSecretDetails
   *
   * @returns {object} metadata of AppleMultifactorSecretDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppleMultifactorSecretDetails',
      type: {
        name: 'Composite',
        className: 'AppleMultifactorSecretDetails',
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
          authCode: {
            required: true,
            serializedName: 'authCode',
            type: {
              name: 'String'
            }
          },
          appSpecificPassword: {
            required: false,
            serializedName: 'appSpecificPassword',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppleMultifactorSecretDetails;
