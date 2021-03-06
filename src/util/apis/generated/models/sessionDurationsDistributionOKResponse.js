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
 * Class representing a SessionDurationsDistributionOKResponse.
 */
class SessionDurationsDistributionOKResponse {
  /**
   * Create a SessionDurationsDistributionOKResponse.
   * @property {array} [distribution] The count of sessions in these buckets.
   * @property {string} [previousAverageDuration] The previous average session
   * duration for previous time range.
   * @property {string} [averageDuration] The average session duration for
   * current time range.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SessionDurationsDistributionOKResponse
   *
   * @returns {object} metadata of SessionDurationsDistributionOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SessionDurationsDistributionOKResponse',
      type: {
        name: 'Composite',
        className: 'SessionDurationsDistributionOKResponse',
        modelProperties: {
          distribution: {
            required: false,
            serializedName: 'distribution',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SessionDurationsDistributionOKResponseDistributionItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'SessionDurationsDistributionOKResponseDistributionItem'
                  }
              }
            }
          },
          previousAverageDuration: {
            required: false,
            serializedName: 'previous_average_duration',
            type: {
              name: 'String'
            }
          },
          averageDuration: {
            required: false,
            serializedName: 'average_duration',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SessionDurationsDistributionOKResponse;
