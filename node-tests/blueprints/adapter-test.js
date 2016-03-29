'use strict';

var setupTestHooks     = require('ember-cli-blueprint-test-helpers/lib/helpers/setup');
var BlueprintHelpers   = require('ember-cli-blueprint-test-helpers/lib/helpers/blueprint-helper');
var generateAndDestroy = BlueprintHelpers.generateAndDestroy;

describe('Acceptance: ember generate and destroy adapter', function() {
  setupTestHooks(this);

  it('adapter foo', function() {
    return generateAndDestroy(['adapter', 'foo'], {
      files: [
        {
          file: 'app/adapters/foo.coffee',
          contains: [
            "`import ApplicationAdapter from './application'`"
          ]
        }
      ]
    });
  });

  it('adapter foo', function() {
    return generateAndDestroy(['adapter', 'foo'], {
      files: [
        {
          file: 'app/adapters/foo.coffee',
          contains: [
            "`import DS from 'ember-data'`"
          ]
        }
      ]
    });
  });

});
