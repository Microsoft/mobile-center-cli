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
 * Class representing a GroupCountsPerDayOKResponse.
 */
class GroupCountsPerDayOKResponse {
  /**
   * Create a GroupCountsPerDayOKResponse.
   * @property {number} [count] total error count
   * @property {array} [errors] the total error count for day
   */
  constructor() {
  }

  /**
   * Defines the metadata of GroupCountsPerDayOKResponse
   *
   * @returns {object} metadata of GroupCountsPerDayOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GroupCountsPerDayOKResponse',
      type: {
        name: 'Composite',
        className: 'GroupCountsPerDayOKResponse',
        modelProperties: {
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          errors: {
            required: false,
            serializedName: 'errors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GroupCountsPerDayOKResponseErrorsItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'GroupCountsPerDayOKResponseErrorsItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GroupCountsPerDayOKResponse;
