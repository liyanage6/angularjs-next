let Observable = require ('rxjs').Observable;

let values = Observable.create( (observer) => {
    try {
        observer.next("Hello");
        observer.next("World");
        observer.next(2019);

        // Commenter l'un pour voir le fonctionnement du subscribe
        // throw new Error("Boom");
        observer.complete();

    } catch (e) {
        observer.error(e);
    }
});

values.subscribe(
    (data) => console.log(data),
    (err) => console.log('erreur récupérée ', err),
    () => console.log('Complete')
);
