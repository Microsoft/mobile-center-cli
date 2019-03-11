/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * org settings response
 *
 */
class OrgComplianceSettingsResponse {
  /**
   * Create a OrgComplianceSettingsResponse.
   * @member {string} id The internal unique id (UUID) of the organization
   * compliance setting
   * @member {string} orgId The internal unique id (UUID) of the organization.
   * @member {string} certificateConnectionId certificate connection id to wrap
   * and resign the app after wrapping
   * @member {boolean} [isMamEnabled] flag to tell if mam warpping is enabled
   * on the Org
   */
  constructor() {
  }

  /**
   * Defines the metadata of OrgComplianceSettingsResponse
   *
   * @returns {object} metadata of OrgComplianceSettingsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OrgComplianceSettingsResponse',
      type: {
        name: 'Composite',
        className: 'OrgComplianceSettingsResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          orgId: {
            required: true,
            serializedName: 'org_id',
            type: {
              name: 'String'
            }
          },
          certificateConnectionId: {
            required: true,
            serializedName: 'certificate_connection_id',
            type: {
              name: 'String'
            }
          },
          isMamEnabled: {
            required: false,
            serializedName: 'is_mam_enabled',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = OrgComplianceSettingsResponse;
