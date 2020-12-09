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
    "revision": "8198d47aaa89e74ce71f5497a9165a79"
  },
  {
    "url": "assets/css/0.styles.a4ccfc9a.css",
    "revision": "4ef9022bb59dd774530d42b17407bb1c"
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
    "url": "assets/js/10.de2a9459.js",
    "revision": "299ddd3e15925c02045cd8cb3b2365c8"
  },
  {
    "url": "assets/js/11.c4221221.js",
    "revision": "cb0572b463869a1f3c2c54310003a527"
  },
  {
    "url": "assets/js/12.fa614b2c.js",
    "revision": "405591349d0d157bf74ac8ed7ee61143"
  },
  {
    "url": "assets/js/13.14c5b9d5.js",
    "revision": "ac827e87d49c8f85412ed18d4980e8b4"
  },
  {
    "url": "assets/js/14.0babe1cc.js",
    "revision": "a6bf65801eb05194ae1ac74294d215fc"
  },
  {
    "url": "assets/js/15.7e264588.js",
    "revision": "00cd87658932ac0fe08d26812e2341ad"
  },
  {
    "url": "assets/js/2.828a514d.js",
    "revision": "d2f134f54b84f04f46a88f79f5719bb8"
  },
  {
    "url": "assets/js/3.a3e46109.js",
    "revision": "f304715808685b459296017af2e6de97"
  },
  {
    "url": "assets/js/4.0c1b844d.js",
    "revision": "72d3c095e65492212f43ee9b8387441f"
  },
  {
    "url": "assets/js/5.5ddf9381.js",
    "revision": "c2cfd458e39be6980dc4da183dcd1efe"
  },
  {
    "url": "assets/js/6.3d486f9c.js",
    "revision": "99d709f27f00b5cd7c4d5f37ba5ccba1"
  },
  {
    "url": "assets/js/7.a68615a9.js",
    "revision": "0bcdb1a3dee2feba47d04572d1f77ecc"
  },
  {
    "url": "assets/js/8.b5653849.js",
    "revision": "0fcfe6046a6711865772e72f3adab0e6"
  },
  {
    "url": "assets/js/9.ae32362f.js",
    "revision": "e897e57cdd8245e6c9df18110b387603"
  },
  {
    "url": "assets/js/app.2904bdae.js",
    "revision": "19a4f9ef1e48c91cbe2c64ad0d362996"
  },
  {
    "url": "avatar.png",
    "revision": "d1c21ff2527d722017962e43e9fbf179"
  },
  {
    "url": "config.html",
    "revision": "9381eaad55ce7b25430ed626502e4a1e"
  },
  {
    "url": "guid/index.html",
    "revision": "a03794b1e37620c7b7661703a8f207a3"
  },
  {
    "url": "guid/other.html",
    "revision": "89d0c89d2d6e86f7844ec6f1235571d1"
  },
  {
    "url": "index.html",
    "revision": "f50be9c97d374745ebdae765d55471c7"
  },
  {
    "url": "jottings/index.html",
    "revision": "1006d134919207d29ead1ae2cdb7aac5"
  },
  {
    "url": "jottings/using-vue.html",
    "revision": "ac87a38f8242d6fc4da4e0b06a76784c"
  },
  {
    "url": "logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "markdown/index.html",
    "revision": "adf98c06f821df4c5f6bec0581039fed"
  },
  {
    "url": "webgl/index.html",
    "revision": "37a382aff314af4c525704e3fe52f600"
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
