/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @summary Test Run
  *
 * Summary single test run on Xamarin Test Cloud
 *
 */
class TestRun {
  /**
   * Create a TestRun.
   * @member {uuid} [id] The unique id of the test upload
   * @member {string} [date] The date and time the test was uploaded
   * @member {string} [appVersion] The compiled version of the app binary
   * @member {string} [testSeries] The name of the test series with which this
   * test upload is associated
   * @member {string} [platform] The device platform targeted by the test.
   * Possible values are 'ios' or 'android'
   * @member {string} [runStatus] The current status of the test run, in
   * relation to the various phases
   * @member {string} [resultStatus] The passed/failed state
   * @member {string} [state] Deprecated. Use runStatus instead.
   * @member {string} [status] Deprecated. Use resultStatus instead.
   * @member {string} [description] Human readable explanation of the current
   * test status
   * @member {object} [stats]
   * @member {number} [stats.devices] Number of devices running the test
   * @member {number} [stats.devicesFinished] Number of finished devices
   * @member {number} [stats.devicesFailed] Number of failed devices
   * @member {number} [stats.total] Number of tests in total
   * @member {number} [stats.passed] Number of passed tests
   * @member {number} [stats.failed] Number of failed tests
   * @member {number} [stats.skipped] Number of skipped tests
   * @member {number} [stats.peakMemory] The max amount of MB used during the
   * test run
   * @member {number} [stats.totalDeviceMinutes] The number of minutes of
   * device time the test has been runnign
   * @member {string} [testType] The name of the test framework used to run
   * this test
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestRun
   *
   * @returns {object} metadata of TestRun
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestRun',
      type: {
        name: 'Composite',
        className: 'TestRun',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          date: {
            required: false,
            serializedName: 'date',
            type: {
              name: 'String'
            }
          },
          appVersion: {
            required: false,
            serializedName: 'appVersion',
            type: {
              name: 'String'
            }
          },
          testSeries: {
            required: false,
            serializedName: 'testSeries',
            type: {
              name: 'String'
            }
          },
          platform: {
            required: false,
            serializedName: 'platform',
            type: {
              name: 'String'
            }
          },
          runStatus: {
            required: false,
            serializedName: 'runStatus',
            type: {
              name: 'String'
            }
          },
          resultStatus: {
            required: false,
            serializedName: 'resultStatus',
            type: {
              name: 'String'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          stats: {
            required: false,
            serializedName: 'stats',
            type: {
              name: 'Composite',
              className: 'TestRunStatistics'
            }
          },
          testType: {
            required: false,
            serializedName: 'testType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TestRun;
