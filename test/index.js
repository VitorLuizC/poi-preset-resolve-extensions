import poi from 'poi'
import test from 'ava'

test('Add extensions to Poi\'s webpack configuration', async (context) => {
  const app = poi({
    presets: [
      require('../')([ '.graphql', '.sss' ])
    ]
  })

  await app.prepare()

  const config = app.createWebpackConfig()

  context.true(config.resolve.extensions.includes('.graphql'))
  context.true(config.resolve.extensions.includes('.sss'))
})
