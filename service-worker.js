/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "336cf26e8e6c7adca5d355fd84fd74e2"
  },
  {
    "url": "assets/css/0.styles.4310eecc.css",
    "revision": "f417082b50f5c87626cc2291682bd2f1"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.13133e3e.js",
    "revision": "0d615fae2c75c86e8979f4d2aaeee8f5"
  },
  {
    "url": "assets/js/11.50ad8ba9.js",
    "revision": "01b2a4614aa96f513d9904322793f69a"
  },
  {
    "url": "assets/js/12.79189c4f.js",
    "revision": "0b091d556bf2b196da9a7a10f86216fd"
  },
  {
    "url": "assets/js/13.09fd2363.js",
    "revision": "3091b3204b99f768652a53513d636ae9"
  },
  {
    "url": "assets/js/2.f8a314b2.js",
    "revision": "abf563865c1d8bc56294898a9854e7ee"
  },
  {
    "url": "assets/js/3.d93b824a.js",
    "revision": "0cf60f7dcabbc0f14f0f186dfb0026cc"
  },
  {
    "url": "assets/js/4.b4540c04.js",
    "revision": "6b118ab49fa1d4177bbcaa6b4589b8b8"
  },
  {
    "url": "assets/js/5.eed8b8db.js",
    "revision": "1533ccb449206514461f9515d1526287"
  },
  {
    "url": "assets/js/6.30adda3d.js",
    "revision": "1a70f4000591a1c12a5d666223452830"
  },
  {
    "url": "assets/js/7.b1554317.js",
    "revision": "5a18fe8ec63de6a24d78e620f9cb1a4e"
  },
  {
    "url": "assets/js/8.6a3791c6.js",
    "revision": "d2ce74a8a8c7724ef14f8b7a167d7679"
  },
  {
    "url": "assets/js/9.99f1a0fa.js",
    "revision": "11e7c36cc1cd1a2461a8387bc852187d"
  },
  {
    "url": "assets/js/app.c8190f51.js",
    "revision": "69a0ab1e3fc17084d5314444fccc36c2"
  },
  {
    "url": "config.html",
    "revision": "e88f95b1af84fcc674eb1747c771b341"
  },
  {
    "url": "guide/index.html",
    "revision": "3f8e80f3e4a7d2343f6dd1161b187c8f"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "45d7a3aacd53d896f3175b35567b3856"
  },
  {
    "url": "index.html",
    "revision": "b1f2bd2c3bd64aa1bbd636965ebfdf35"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "webgl/index.html",
    "revision": "06b64a0fbec310e85f1d68c0d4004a28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
