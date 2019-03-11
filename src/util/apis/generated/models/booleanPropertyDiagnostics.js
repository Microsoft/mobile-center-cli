/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Boolean property.
 *
 * @extends models['CustomPropertyDiagnostics']
 */
class BooleanPropertyDiagnostics extends models['CustomPropertyDiagnostics'] {
  /**
   * Create a BooleanPropertyDiagnostics.
   * @member {boolean} value Boolean property value.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of BooleanPropertyDiagnostics
   *
   * @returns {object} metadata of BooleanPropertyDiagnostics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'boolean',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CustomPropertyDiagnostics',
        className: 'BooleanPropertyDiagnostics',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MaxLength: 128,
              Pattern: '^[a-zA-Z][a-zA-Z0-9\-_]*$'
            },
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = BooleanPropertyDiagnostics;
