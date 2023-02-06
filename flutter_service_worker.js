'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e678116ad7553dde0574ed4fedee0861",
"index.html": "5864efd5e03363eb72f3cf04df042d8e",
"/": "5864efd5e03363eb72f3cf04df042d8e",
"IMG_5546.JPG": "693dc784668a574825141380bb4613d6",
"main.dart.js": "3b11e85e77cf3756fa1e93d06ab91ca8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "58c2c159ffbb08b76828094aa73a9754",
".git/config": "eb040e021189fcb7c7dde39ab6841790",
".git/objects/59/edcd0665af4c1a7b75cf482366f9870571c48f": "c18fc10520568d9f460a765ad29c8525",
".git/objects/50/e1dc622daa41f074d739c7e1a0dee93498c203": "980b35ce61d3d933fc3d35bf6e9e8f76",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/9e8a3fd89ec8c1208263e217a3a9b74ecb0a06": "6e6c784e30908b371ce3b750bad3f47a",
".git/objects/56/ae12f4853ab23670abd0056262b8128b68e0b5": "88799b104b476964d5934734b8612d48",
".git/objects/60/7063baf87c47de29f3c7592d924df3cd1c1150": "a9840827078e7d9e39d6c3a3162de644",
".git/objects/df/e91dff43d839ae4a77060888d9ff20e73c70d1": "70ffcb81eb29b37bc2f5395de77b7c89",
".git/objects/df/cc0840a1b9c19f5f76f9abc6944336da2b89b0": "a339396902686ce21db99369c624cba9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a9cca9da70d32b2090379513cc536c26221492": "0edce31c5f4bc6e402533fb841d02704",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/df94d556178a9d6fc28cecf9df276a2f82f186": "913ec4ef79c631ce6ed6a93f7447702d",
".git/objects/e2/59c3dbd14642f6bcc5cbc2792078a743a7830e": "9a3e037b55d87a8e9f9f03643cd43549",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/8b58407b5613004fe5ee556ed324f1f123b567": "61ed59940e9fb570568572bdf7fc625e",
".git/objects/ec/9cd63465669ef4181b1ee94c55e2375a69d798": "17ed56a137dbde9ec35e84eea65f353c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/16/2d172d6807107b91f8a29e2f71f78588f79396": "5ccef691daacee697511ba2b34bb8fed",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/b4994e0ff5babc7e72af8e73eb1e91892699a2": "2ca69e5b3361b7d262009dd0db435631",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/6af0a5d2f22f435a308342829155179eaf7d41": "9c6aa7c5a72e9cba6c269f21d1203322",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/4e6615e8506572ba53e8b879f6ddddc0b356dc": "46b52fb926d5a8426988406ce35704e3",
".git/objects/9a/0cd9309847d90b53890af842e9e9102ae3216f": "ae6a04d951345449dd2359aecc63f6aa",
".git/objects/5c/ebc34defa6025babb3cdfd6995b522c726db22": "157a27b92686c9780499a45ae093dd9a",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/b1/fe157107b0f4f76cdbfd67d802ab999b58c3bb": "1cac44e48f2fbe8f66e7237d311f043e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/684c48bccd720630dc1fdf9df2c24205f140ac": "6192be555957dfff2923cc58033499f9",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/3b75071eee99a922b60510d3a10f71a7e2a78e": "f10b659b051bf751c495f738099713f3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e6/417eaf1b953141b95819e59bd65f79e9d7034d": "44fcb0226dc316a121dee102f2a8abbf",
".git/objects/fa/db083d4c8e166b78b646b4338dd74fc21165c6": "6d15c946cf77e8221a9a2d03cf2b8a4b",
".git/objects/e9/e1a2209b5aa96e2372d2f13ecb6ff1e143481b": "204bfff673c508a0eff3521ef704c547",
".git/objects/f8/6607a9e45230cf142e96d937da3246e8434d5d": "65c4c8cc700384e0157f01625359dcc2",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a44befbfc7450b880dcf6f842e1f197a0a201f": "e8a77cd761672d5b6fb8b4b7f67852dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/5df0fb3bc855ae09fa0e3d3c1701d1ab889264": "6f203b24ca282819ab98524ee9caadb7",
".git/objects/48/d358f8aec4aa4ac0a791fd001506989e46934e": "7ac3912ecb4bcbf913456c95013448fd",
".git/objects/1e/c3063dbe5a848dc1c13ffcf3f4b1829210f9d1": "3ceb6640bb9777efef0295c76fc7f79e",
".git/objects/24/a2db725469cac1bd341f92d2990bc068f8afad": "ee1951ebca6ddecd8d8f085e17e61f54",
".git/objects/15/f755c5a20063e0c7113c9b35137b227b562d4d": "8589cfd619aad574876330babcca9a8b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/8b/fbb75c53d3f797164b461313be54f6522acc17": "5ceaf4da4d302a5964cd5cb1f9857ffc",
".git/objects/13/0849ae2c6abacf84aedd13cbf09ae1adea8fbf": "9f4e916918efbe682c14317350b31d76",
".git/objects/14/bf89866b0f7a2415d0b12e3f6f2aa7d1b8ae4f": "b94c857c42b63e528ce42e38e7eaedec",
".git/objects/22/865f11596a2572bdaf7dd05ffcd8de2ef55f5d": "d4c9369a061c47a57876c31c52c04eb6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33a8dddf8dff95f6faa4cac3df5899f9",
".git/logs/refs/heads/main": "ade3b5f38742475c02d74aaa6d5f999a",
".git/logs/refs/remotes/origin/main": "e2b73a135274eea329b07c395015e6f4",
".git/logs/refs/remotes/vivek_webapp/main": "6c8ee52a5197b7993c93d002a4bfa0d7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9cece31ff5eb655de335f191f9ee7816",
".git/refs/remotes/origin/main": "9cece31ff5eb655de335f191f9ee7816",
".git/refs/remotes/vivek_webapp/main": "bbb4c239c9447f7f6f9d54df8e770974",
".git/index": "e2da9cbadb4add6b1b80759aa76c5000",
".git/COMMIT_EDITMSG": "05785482c6a205a0bde2ac026f67fd8b",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "e6d8baafc703760bd719d5b05d4aa52d",
"assets/NOTICES": "0d6d40cfe9c82edf6a7b53093e74eb5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "0a846772b730708d520b7e2cdc6e1ca5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/IMG_5546.JPG": "8cd3df25441097a1321c4455fa5f5cb0",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
