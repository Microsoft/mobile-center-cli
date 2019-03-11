/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * ExternalStoreRequest
 *
 */
class ExternalStoreRequest {
  /**
   * Create a ExternalStoreRequest.
   * @member {string} [type] store Type. Possible values include: 'googleplay',
   * 'intune', 'apple'
   * @member {string} [name] name of the store. In case of googleplay, and
   * Apple store this is fixed to Production.
   * @member {string} [track] track of the store. Can be production, alpha &
   * beta for googleplay. Can be production, testflight-internal &
   * testflight-external for Apple Store. Possible values include:
   * 'production', 'alpha', 'beta', 'testflight-internal',
   * 'testflight-external'
   * @member {object} [intuneDetails]
   * @member {object} [intuneDetails.secretJson]
   * @member {string} [intuneDetails.secretJson.idToken] the id token of user
   * @member {string} [intuneDetails.secretJson.refreshToken] the refresh token
   * for user
   * @member {string} [intuneDetails.secretJson.refreshTokenExpiry] the expiry
   * of refresh token
   * @member {object} [intuneDetails.targetAudience]
   * @member {string} [intuneDetails.targetAudience.name] display name for the
   * target audience/group
   * @member {object} [intuneDetails.appCategory]
   * @member {string} [intuneDetails.appCategory.name] display name for the app
   * category
   * @member {string} [intuneDetails.tenantId] tenant id of the intune store
   * @member {string} [serviceConnectionId] Id for the shared service
   * connection. In case of Apple AppStore, this connection will be used to
   * create and connect to the Apple AppStore in Mobile Center.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ExternalStoreRequest
   *
   * @returns {object} metadata of ExternalStoreRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExternalStoreRequest',
      type: {
        name: 'Composite',
        className: 'ExternalStoreRequest',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          track: {
            required: false,
            serializedName: 'track',
            type: {
              name: 'String'
            }
          },
          intuneDetails: {
            required: false,
            serializedName: 'intune_details',
            type: {
              name: 'Composite',
              className: 'IntuneStoreRequest'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ExternalStoreRequest;
