'use strict';

var setupTestHooks     = require('ember-cli-blueprint-test-helpers/lib/helpers/setup');
var BlueprintHelpers   = require('ember-cli-blueprint-test-helpers/lib/helpers/blueprint-helper');
var generateAndDestroy = BlueprintHelpers.generateAndDestroy;

describe('Acceptance: ember generate and destroy component', function() {
  setupTestHooks(this);

  it('component foo-thing app', function() {
    // pass any additional command line options in the arguments array
    return generateAndDestroy(['component', 'foo-thing'], {
      // define files to assert, and their contents
      files: [
        {
          file: 'app/components/foo-thing.js',
          contains: [
            "`import Ember from 'ember'`",
            "FooThingComponent = Ember.Component.extend()",
            "`export default FooThingComponent`"
          ]
        }
      ]
    });
  });

  // TODO:
  //   - Test no hyphen in component name
  //   - Test component in addon - should define
});
