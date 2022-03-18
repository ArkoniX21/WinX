const url_local = "http://localhost:5000/api/"
const url_web = "http://mysecrets.site/api/"

export default class Fetchdata {
    async post_server(path, data) {
        const response = await fetch(url_web + path, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        return response.json()
    }

    async get_server(path, token) {

        const response = await fetch(url_web + path, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': 'Bearer ' + token
            },
        });
        return await response.json();
    }

    /*async function downloadFile(method, data) {
        const response = await fetch("https://simpletrade.xyz/api/" + method, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        return response;
    }*/


// ==================== USER =====================

    register(data) {
        return this.post_server("user/register", data)
    }

    login(data) {
        return this.post_server("user/login", data)
    }

    get_profile(id, token) {
        return this.get_server("user/" + id, token)
    }

}