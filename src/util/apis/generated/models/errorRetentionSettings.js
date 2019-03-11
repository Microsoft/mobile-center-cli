/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorRetentionSettings.
 */
class ErrorRetentionSettings {
  /**
   * Create a ErrorRetentionSettings.
   * @member {number} retentionInDays
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorRetentionSettings
   *
   * @returns {object} metadata of ErrorRetentionSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorRetentionSettings',
      type: {
        name: 'Composite',
        className: 'ErrorRetentionSettings',
        modelProperties: {
          retentionInDays: {
            required: true,
            serializedName: 'retention_in_days',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorRetentionSettings;
