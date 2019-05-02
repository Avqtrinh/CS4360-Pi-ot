export const imports = {
  'components.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "components" */ 'components.mdx'
    ),
  'docs.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs" */ 'docs.mdx'),
  'mqtt.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mqtt" */ 'mqtt.mdx'),
  'test.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "test" */ 'test.mdx'),
}
