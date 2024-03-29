import { HOSTNAME } from '../constant'

export default {
  // https://pwa.nuxtjs.org/modules/meta.html
  meta: {
    name: 'EnalFarid',
    description: 'A personal site of Enal Farid',
    lang: 'id',
    ogHost: `${HOSTNAME}`,
    twitterCard: 'summary_large_image',
    twitterSite: '@enalfarid',
    twitterCreator: '@enalfarid'
  },

  // https://pwa.nuxtjs.org/modules/manifest.html
  manifest: {
    name: 'EnalFarid',
    short_name: 'enalfarid',
    start_url: '/?utm_source=homescreen',
    description: 'A personal site of Enal Farid',
    lang: 'id',
    background_color: '#2D3748',
    theme_color: '#2D3748'
  },

  // https://pwa.nuxtjs.org/modules/workbox.html
  workbox: {
    offlineAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: 'https://ajax.cloudflare.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://d33wubrfki0l68.cloudfront.net/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'staleWhileRevalidate'
      }
    ]
  }
}
