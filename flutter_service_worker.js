'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f6af208d029273c68dead806c546f99b",
"/": "f6af208d029273c68dead806c546f99b",
"main.dart.js": "0ae649d8fb2019ffcd34362efa26f4da",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "642c72657e705c66575e99ec069fefa5",
"assets/LICENSE": "e44b720bfc1651f25ad79802633835a2",
"assets/AssetManifest.json": "de097a653d6e2bbb7c07ca7a1bff8087",
"assets/lang/ja-JP.json": "aeec7b2dd561273697ff5956b38b8235",
"assets/lang/zh-CN.json": "91b17340b4251a3402915c1137c04d34",
"assets/lang/zh-HK.json": "91b17340b4251a3402915c1137c04d34",
"assets/lang/zh-TW.json": "91b17340b4251a3402915c1137c04d34",
"assets/lang/en-US.json": "86b81f6c88c89eb8dcb2172c1c55a576",
"assets/FontManifest.json": "8b468bc1e0bd3c4a04c5edbfe25c157b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/fonts/Oxanium-Regular.ttf": "314cfaceddaeff5e81e79d1a34b3b1fa",
"assets/assets/fonts/Oxanium-Light.ttf": "200f38f86ece3141a537d9e2e8777dc1",
"assets/assets/fonts/Oxanium-ExtraBold.ttf": "f10303a66c2f9de02586338f54ce5448",
"assets/assets/fonts/Oxanium-Bold.ttf": "fae76ac58ccad3366598275f54f748b4",
"assets/assets/fonts/Oxanium-Medium.ttf": "400ab61503d6af26e2d5eb203a065a78",
"assets/assets/fonts/Arial.ttf": "07d53b5b4d43b671764d7075be494019",
"assets/assets/fonts/paymary.ttf": "0ba526d16afe0c20cba7ad032610651c",
"assets/assets/fonts/Oxanium-ExtraLight.ttf": "db578e595583c8a41e7e2fedcb709e44",
"assets/assets/fonts/Oxanium-Semibold.ttf": "991b444a208de18d3cb9acb9488d0c28",
"assets/assets/flare/save.flr": "94754afe34b9800578b217da1c7df9be",
"assets/assets/flare/download.flr": "f73551465d0715c10eab43cf65384b38"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
