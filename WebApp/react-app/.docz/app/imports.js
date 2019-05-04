export const imports = {
  'Docz/libraries.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docz-libraries" */ 'Docz/libraries.mdx'
    ),
  'Docz/about.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docz-about" */ 'Docz/about.mdx'
    ),
  'Docz/mqtt.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docz-mqtt" */ 'Docz/mqtt.mdx'
    ),
  'Docz/mqtt_service.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docz-mqtt-service" */ 'Docz/mqtt_service.mdx'
    ),
  'Docz/react-app.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docz-react-app" */ 'Docz/react-app.mdx'
    ),
  'src/modules/Dashboard.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-dashboard" */ 'src/modules/Dashboard.mdx'
    ),
  'src/modules/Home.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-home" */ 'src/modules/Home.mdx'
    ),
  'src/modules/Log.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-log" */ 'src/modules/Log.mdx'
    ),
  'src/modules/Login.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-login" */ 'src/modules/Login.mdx'
    ),
  'src/modules/Logout.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-logout" */ 'src/modules/Logout.mdx'
    ),
  'src/modules/Navigation.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-navigation" */ 'src/modules/Navigation.mdx'
    ),
  'src/modules/Routes.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-routes" */ 'src/modules/Routes.mdx'
    ),
  'src/modules/Signup.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-signup" */ 'src/modules/Signup.mdx'
    ),
  'src/modules/Stats.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-modules-stats" */ 'src/modules/Stats.mdx'
    ),
}
