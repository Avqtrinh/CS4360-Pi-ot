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
}
