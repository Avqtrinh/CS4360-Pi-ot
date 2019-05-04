export const imports = {
  'about.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "about" */ 'about.mdx'),
  'libraries.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "libraries" */ 'libraries.mdx'
    ),
  'MQTTCon/mqtt.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "mqtt-con-mqtt" */ 'MQTTCon/mqtt.mdx'
    ),
  'MQTTCon/mqtt_service.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "mqtt-con-mqtt-service" */ 'MQTTCon/mqtt_service.mdx'
    ),
  'react-app/react-app.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-react-app" */ 'react-app/react-app.mdx'
    ),
  'react-app/src/modules/Dashboard.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-dashboard" */ 'react-app/src/modules/Dashboard.mdx'
    ),
  'react-app/src/modules/Home.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-home" */ 'react-app/src/modules/Home.mdx'
    ),
  'react-app/src/modules/Log.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-log" */ 'react-app/src/modules/Log.mdx'
    ),
  'react-app/src/modules/Login.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-login" */ 'react-app/src/modules/Login.mdx'
    ),
  'react-app/src/modules/Logout.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-logout" */ 'react-app/src/modules/Logout.mdx'
    ),
  'react-app/src/modules/Routes.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-routes" */ 'react-app/src/modules/Routes.mdx'
    ),
  'react-app/src/modules/Navigation.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-navigation" */ 'react-app/src/modules/Navigation.mdx'
    ),
  'react-app/src/modules/Signup.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-signup" */ 'react-app/src/modules/Signup.mdx'
    ),
  'react-app/src/modules/Stats.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "react-app-src-modules-stats" */ 'react-app/src/modules/Stats.mdx'
    ),
}
