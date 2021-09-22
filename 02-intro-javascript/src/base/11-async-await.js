





const getImgen = async () => {


    try {

        const resp = await fetch('http://api.giphy.com/v1/gifs/random?api_key=FAojj336ohZpReqVhyVwVOHo1jWO94vB&limit=10');


        const { data } = await resp.json();
        const { url } = data.images.original

        console.log(url)

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        console.error('Manejo del error', error);
    }



}


getImgen();


// promesa
// .then( resp =>  resp.json() )
// .then( ({data}) => {

//     const { url } = data.images.original;
//     const img = document.createElement('img');
//     img.src = url;

//     document.body.append(img);

// })
// .catch( console.warn)