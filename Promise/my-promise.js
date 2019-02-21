function http(url, method) {
    let promise = new Promise( (res, err) => {
        setTimeout( () => {
            let data = '';
            if (data) {
                res(data);
            } else {
                err('No Entry');
            }
        }, 1000);
    });
    return promise;
}

http('http://google.fr', 'GET')
        .then( (data) => console.log(data) )
        .catch( (err) => console.log(err) );