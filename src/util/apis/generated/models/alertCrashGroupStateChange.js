/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AlertCrashGroupStateChange class.
 * @constructor
 * AlertCrashGroup patching parameter
 *
 * @member {string} [state] Possible values include: 'Open', 'Closed',
 * 'Ignored'
 * 
 */
function AlertCrashGroupStateChange() {
}

/**
 * Defines the metadata of AlertCrashGroupStateChange
 *
 * @returns {object} metadata of AlertCrashGroupStateChange
 *
 */
AlertCrashGroupStateChange.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AlertCrashGroupStateChange',
    type: {
      name: 'Composite',
      className: 'AlertCrashGroupStateChange',
      modelProperties: {
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AlertCrashGroupStateChange;