export const Service = {
    token: '',
    headers: new Headers({
        'Accept': 'application/json, ; charset=utf-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':' GET, POST, PATCH, DELETE',
        "Access-Control-Allow-Headers": 'Origin, Content-Type, X-Auth-Token'
    }),
    baseURL: 'http://localhost:3000',
}