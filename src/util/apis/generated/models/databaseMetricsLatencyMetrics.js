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
 * Class representing a DatabaseMetricsLatencyMetrics.
 */
class DatabaseMetricsLatencyMetrics {
  /**
   * Create a DatabaseMetricsLatencyMetrics.
   * @property {object} [readLatencyMetrics]
   * @property {string} [readLatencyMetrics.name]
   * @property {string} [readLatencyMetrics.unit]
   * @property {date} [readLatencyMetrics.startTime]
   * @property {date} [readLatencyMetrics.endTime]
   * @property {array} [readLatencyMetrics.metricValues]
   * @property {object} [writeLatencyMetrics]
   * @property {string} [writeLatencyMetrics.name]
   * @property {string} [writeLatencyMetrics.unit]
   * @property {date} [writeLatencyMetrics.startTime]
   * @property {date} [writeLatencyMetrics.endTime]
   * @property {array} [writeLatencyMetrics.metricValues]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DatabaseMetricsLatencyMetrics
   *
   * @returns {object} metadata of DatabaseMetricsLatencyMetrics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DatabaseMetrics_latencyMetrics',
      type: {
        name: 'Composite',
        className: 'DatabaseMetricsLatencyMetrics',
        modelProperties: {
          readLatencyMetrics: {
            required: false,
            serializedName: 'readLatencyMetrics',
            type: {
              name: 'Composite',
              className: 'DatabaseMetricsLatencyMetricsReadLatencyMetrics'
            }
          },
          writeLatencyMetrics: {
            required: false,
            serializedName: 'writeLatencyMetrics',
            type: {
              name: 'Composite',
              className: 'DatabaseMetricsLatencyMetricsWriteLatencyMetrics'
            }
          }
        }
      }
    };
  }
}

module.exports = DatabaseMetricsLatencyMetrics;