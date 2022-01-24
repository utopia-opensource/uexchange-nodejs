import CryptonAPI from './core.js';
import { request } from 'https';
import { Buffer } from 'buffer';

let cookies = '';

function transport(method, url, body){
    return new Promise((resolve, reject) => {
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        if(cookies) headers.Cookie = cookies;
        const req = request(url, { method, headers }, res => {
            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('error', reject);
            res.on('end', () => resolve(Buffer.concat(data).toString('utf8')));
        });
        req.on('error', reject);          
        req.write(body);
        req.end();
    });
}

function saveToken(token){
    cookies = `auth_token=${token}`;
}

export default new CryptonAPI(transport, saveToken);
