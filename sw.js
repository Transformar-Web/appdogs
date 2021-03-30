
const cache_Name = 'cache_v1';
const memoryCache = [
    "./img",
    "./js",
    "./css",
]


self.addEventListener('install', (e)=>{
   e.waitUntil(
       caches.open(cache_Name)
       .then(cache => {
          return cache.addAll(memoryCache)
          .then(()=> self.skipWaiting())
       })
       .catch(err=> console.log('Fallo la instalación app',err))
   )
})

self.addEventListener('activate', (e)=>{
    
    const listCache = [cache_Name];

    e.waitUntil(
        caches.keys()
        .then(cachesNames=> {
            cachesNames.map(cacheName => {
                if(listCache.indexOf(cacheName) === -1){
                   return caches.delete(cacheName)
                }
            })    
        })
        .then(()=> self.clients.claim())
    )

})

self.addEventListener('fetch', (e)=>{
   e.respondWith(
      caches.match(e.request)
      .then(res=>{
          if(res){
              return res
          }

          return fetch(e.request)
      })
   )
})

















