/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the BranchConfigurationToolsets class.
 * @constructor
 * The branch build configuration for each toolset
 *
 * @member {object} [xcode]
 * 
 * @member {string} [xcode.projectOrWorkspacePath] Xcode project/workspace path
 * 
 * @member {string} [xcode.podfilePath] Path to CococaPods file, if present
 * 
 * @member {string} [xcode.cartfilePath] Path to Carthage file, if present
 * 
 * @member {string} [xcode.provisioningProfileEncoded]
 * 
 * @member {string} [xcode.certificateEncoded]
 * 
 * @member {string} [xcode.certificatePassword]
 * 
 * @member {string} [xcode.scheme]
 * 
 * @member {string} [xcode.xcodeVersion]
 * 
 * @member {string} [xcode.provisioningProfileFilename]
 * 
 * @member {string} [xcode.certificateFilename]
 * 
 * @member {string} [xcode.teamId]
 * 
 * @member {boolean} [xcode.automaticSigning]
 * 
 * @member {object} [javascript]
 * 
 * @member {string} [javascript.packageJsonPath] Path to package.json file for
 * the main project, e.g. "package.json" or "myapp/package.json"
 * 
 * @member {boolean} [javascript.runTests] Whether to run Jest unit tests, via
 * npm test, during the build
 * 
 * @member {object} [xamarin]
 * 
 * @member {string} [xamarin.slnPath]
 * 
 * @member {string} [xamarin.isSimBuild]
 * 
 * @member {string} [xamarin.args]
 * 
 * @member {string} [xamarin.configuration]
 * 
 * @member {string} [xamarin.p12File]
 * 
 * @member {string} [xamarin.p12Pwd]
 * 
 * @member {string} [xamarin.provProfile]
 * 
 * @member {object} [android]
 * 
 * @member {string} [android.gradleWrapperPath] Path to the Gradle wrapper
 * script
 * 
 * @member {string} [android.module] The Gradle module to build
 * 
 * @member {string} [android.buildVariant] The Android build variant to build
 * 
 * @member {boolean} [android.runTests] Whether to run unit tests during the
 * build (default)
 * 
 * @member {boolean} [android.runLint] Whether to run lint checks during the
 * build (default)
 * 
 */
function BranchConfigurationToolsets() {
}

/**
 * Defines the metadata of BranchConfigurationToolsets
 *
 * @returns {object} metadata of BranchConfigurationToolsets
 *
 */
BranchConfigurationToolsets.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BranchConfigurationToolsets',
    type: {
      name: 'Composite',
      className: 'BranchConfigurationToolsets',
      modelProperties: {
        xcode: {
          required: false,
          serializedName: 'xcode',
          type: {
            name: 'Composite',
            className: 'XcodeBranchConfigurationProperties'
          }
        },
        javascript: {
          required: false,
          serializedName: 'javascript',
          type: {
            name: 'Composite',
            className: 'JavaScriptBranchConfigurationProperties'
          }
        },
        xamarin: {
          required: false,
          serializedName: 'xamarin',
          type: {
            name: 'Composite',
            className: 'XamarinBranchConfigurationProperties'
          }
        },
        android: {
          required: false,
          serializedName: 'android',
          type: {
            name: 'Composite',
            className: 'AndroidBranchConfigurationProperties'
          }
        }
      }
    }
  };
};

module.exports = BranchConfigurationToolsets;
