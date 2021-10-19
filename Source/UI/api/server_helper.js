import axios from 'axios';

export async function addItem(requestBody) {
    let result = undefined;
    await axios.post("http://localhost:3000/task", requestBody)
        .then(function (response) {
            console.log(response);
            result = response.data;
        })
        .catch(function (error) {
            console.log("hata", error);
        });
    return result;
}

export async function getItem(id) {
    let result = undefined;
    await axios.get("http://localhost:3000/task/" + id)
        .then(function (response) {
            console.log(response);
            result = response.data;
        })
        .catch(function (error) {
            console.log("hata", error);
        });
    return result;
}

export async function getAllItems() {
    let result = undefined;

    await axios.get("http://localhost:3000/task")
        .then(function (response) {
            console.log(response);
            result = response.data;
        })
        .catch(function (error) {
            console.log("hata", error);
        });
    return result;
}
