const api = (() => {
    const BASE = 'https://allweb.fun/coop/api/';
    const API_KEY = 'd11fa40caf24c4a7683ed97135f36aa909ee2f54'
    function query(method, route, params) {
        const body = params?.body;

        const headers = new Headers();
        headers.append(
            "Authorization",
            API_KEY
        );


        const request = new Request(
            BASE + route,
            {
                body: JSON.stringify(body),
                method,
                headers
            }
        );

        return fetch(request).then(reponse => reponse.json())
    }
    return {
        get(route, params) {
            return query('GET', route, params)
        },
        post(route, params) {
            return query('POST', route, params)
        },
        put(route, params) {
            return query('PUT', route, params)
        },
        delete(route, params) {
            return query('DELETE', route, params)
        },
    }
})();
