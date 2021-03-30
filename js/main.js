if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('service worker disponible', reg))
    .catch(err => console.log('Error conectando service worker', err))
}