import CryptonAPI from './core.js';

function transport(method, url, body){
    const options = {
        method,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: 'include',
    };
    if(body) options.body = body;
    return fetch(url, options).then(v => v.text());
}

function saveToken(token){
    document.cookie = `auth_token=${token}`;
}

export default new CryptonAPI(transport, saveToken);
