`import { <%= camelizedModuleName %> } from '<%= dasherizedModulePrefix %>/helpers/<%= dasherizedModuleName %>'`
`import { module, test } from 'qunit'`

module '<%= friendlyTestName %>'

# Replace this with your real tests.
test 'it works', (assert) ->
  result = <%= camelizedModuleName %> 42
  assert.ok result
