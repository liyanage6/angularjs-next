function http(url, method, successCallback, errorCallback) {
    setTimeout( () => {
        let data = "Bonjour";
        if (data) {
            successCallback(data);
        } else {
            errorCallback('No Entry');
        }
    }, 1000);
}

http('http://google.fr', 'GET', (data) => {
    console.log(data);
}, (err) => {
    console.log(err);
});