import { expect, test } from 'vitest'

import * as clusters from './index.js'

test('exports clusters', () => {
  expect(clusters).toMatchInlineSnapshot(`
    {
      "getClustersAddress": [Function],
      "getClusterName": [Function],
      "getCluster": [Function],
    }
  `)
})
