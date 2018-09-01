
import fetch from 'node-fetch'
import register from "../registerServiceWorker";

export function registerApi(registerDetails) {
    return fetch('http://localhost:8080/register', {
        method: 'POST',
        body: JSON.stringify(registerDetails),
        headers: {'Content-Type': 'application/json'}
    })
           .then(res => res.json())
           .catch((err) => console.log(err))

}

export function depositApi(depositDetails) {
    return fetch('http://localhost:8080/deposit', {
        method: 'POST',
        body: JSON.stringify(depositDetails),
        headers: {'Content-Type': 'application/json'}
    })
        .then(res => res.json())
        .catch((err) => console.log(err))

}