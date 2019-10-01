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
 * Class representing a LegacyDeploymentMetricsResponse.
 */
class LegacyDeploymentMetricsResponse {
  /**
   * Create a LegacyDeploymentMetricsResponse.
   * @property {object} [metrics] Object containing a property named after each
   * release label, which contains an object that contains that release's
   * metrics.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegacyDeploymentMetricsResponse
   *
   * @returns {object} metadata of LegacyDeploymentMetricsResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegacyDeploymentMetricsResponse',
      type: {
        name: 'Composite',
        className: 'LegacyDeploymentMetricsResponse',
        modelProperties: {
          metrics: {
            required: false,
            serializedName: 'metrics',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'LegacyDeploymentMetricElementType',
                  type: {
                    name: 'Composite',
                    className: 'LegacyDeploymentMetric'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = LegacyDeploymentMetricsResponse;