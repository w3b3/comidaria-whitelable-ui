// const isLocalhost = Boolean(
//     window.location.hostname === 'localhost' ||
//     window.location.hostname === '[::1]' ||
//     window.location.hostname.match(
//         /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
//     )
// );

type Config = {
    onSuccess?: (registration: ServiceWorkerRegistration) => void;
    onUpdate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: Config) {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swUrl = '/service-worker.js'; // Hardcoded path to service worker script

            fetch(swUrl).then(response => {
                if (response.status === 404 || response.headers.get('content-type')?.includes('text/html')) {
                    console.error('Service worker script not found or has incorrect MIME type.');
                } else {
                    navigator.serviceWorker.register(swUrl).then(registration => {
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }).catch(error => {
                        console.error('Error during service worker registration:', error);
                    });
                }
            }).catch(error => {
                console.error('Error fetching service worker script:', error);
            });
        });
    }
}