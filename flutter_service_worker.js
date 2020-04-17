'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "1386ac7686a49467cc8ea6e7fddafb52",
"/": "1386ac7686a49467cc8ea6e7fddafb52",
"main.dart.js": "ed81e677f20c613d219ad5049a204178",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "642c72657e705c66575e99ec069fefa5",
"assets/LICENSE": "8641adfeaa4a0907736968e2e9112134",
"assets/AssetManifest.json": "bc7a17488d4f0968d9f1b47c29bb59ae",
"assets/lang/ja-JP.json": "800924c2acca0c1ba26c9dc6686f5dd1",
"assets/lang/zh-CN.json": "98c4f73d9e80fa175a317dc86673481d",
"assets/lang/zh-HK.json": "98c4f73d9e80fa175a317dc86673481d",
"assets/lang/zh-TW.json": "98c4f73d9e80fa175a317dc86673481d",
"assets/lang/en-US.json": "1489ac00a5af86d464f06ddbcef5ece6",
"assets/FontManifest.json": "4bdfb9cfcad853a97e53b3e15103e6e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/fonts/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/fonts/Oxanium-Regular.ttf": "314cfaceddaeff5e81e79d1a34b3b1fa",
"assets/assets/fonts/Oxanium-Light.ttf": "200f38f86ece3141a537d9e2e8777dc1",
"assets/assets/fonts/Oxanium-ExtraBold.ttf": "f10303a66c2f9de02586338f54ce5448",
"assets/assets/fonts/Oxanium-Bold.ttf": "fae76ac58ccad3366598275f54f748b4",
"assets/assets/fonts/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/Oxanium-Medium.ttf": "400ab61503d6af26e2d5eb203a065a78",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "8bac22ed4fd7c8a30536be18e2984f84",
"assets/assets/fonts/Arial.ttf": "07d53b5b4d43b671764d7075be494019",
"assets/assets/fonts/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/fonts/paymary.ttf": "b89e8197f738179052b0ee44a15e4622",
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
