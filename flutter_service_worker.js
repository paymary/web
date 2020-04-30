'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "f6af208d029273c68dead806c546f99b",
"/": "f6af208d029273c68dead806c546f99b",
"main.dart.js": "90298031a356ac478b6f09af6c5aaa05",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "642c72657e705c66575e99ec069fefa5",
"assets/LICENSE": "8d053a68c069830acce738a4e13769b0",
"assets/AssetManifest.json": "3e56701523c213df969c77435aeec7e2",
"assets/lang/ja-JP.json": "032ed6b7620a4f469309221058834444",
"assets/lang/zh-CN.json": "9eb7027ce745280b121c5a6bd805bd54",
"assets/lang/zh-HK.json": "ce9828c2c83e9408f6bb906e3d178b6a",
"assets/lang/zh-TW.json": "ce9828c2c83e9408f6bb906e3d178b6a",
"assets/lang/en-US.json": "204ece7049f2f4547957fadf1435b17b",
"assets/FontManifest.json": "62a8d70fc71e477baded1f51b68e7d8c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
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
"assets/assets/fonts/paymary.ttf": "35859059b26e250e1ee62187421b38b6",
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
