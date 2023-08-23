const staticCashName = 'static-site-v1';
const dynamicCashName = 'dynamic-site-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/static/js/bundle.js',
    '/static/js/src_App_js.chunk.js',
    '/static/js/src_views_main_js.chunk.js',
    'static/js/src_components_categories_js.chunk.js',
    '/static/js/src_views_characters_js.chunk.js',
    '/static/js/src_views_episode_js.chunk.js',
    '/static/js/src_views_locations_js.chunk.js',
    '/static/js/src_components_details_js.chunk.js',
    '/static/js/vendors-node_modules_axios_lib_axios_js.chunk.js',
];

self.addEventListener('install', async () => {
    console.log('%csw installed', 'color: orange; font-size: larger; font-weight: bold');
    const cash = await caches.open(staticCashName);
    await cash.addAll(ASSETS)
});
self.addEventListener('activate', async () => {
    console.log('%csw activated', 'color: orange; font-size: larger; font-weight: bold');
    const cachesKeysArr = await caches.keys();
    await Promise.all(cachesKeysArr.filter(key => key !== staticCashName &&  key !== dynamicCashName).map(key => caches.delete(key)));
})
self.addEventListener('fetch', (event) => {
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(req) {
    const cached = await caches.match(req);
    try {
        return cached ?? await fetch(req).then(res=>networkFirst(req));

    }catch (e){
        console.error('cacheFirst: ',e);
        return  networkFirst(req);
    }
}
async function networkFirst(req){
    const cache = await caches.open(dynamicCashName);
    try {
        const res = await fetch(req);
        await cache.put(req, res.clone());
        return res;
    }catch (e){
        console.error('networkFirst: ', e);
        const cached = await cache.match(req);
        return cached ?? await caches.match( '/');
    }
}