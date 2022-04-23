// Crear una peticion para traer las imagenes que sean de la categoria
export const getGifs = async(category) => {
    const api_key = "fGJ65UyQY35HXXICtlGspeej5wbcOHb7";
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api_key}`
    
    const response = await fetch(url);
    const {data} = await response.json();

    // Tomamos los datos que requerimos
    const gifs = data.map(img => {
        return {
            id:img.id,
            title:img.title,
            image: img.images?.downsized_medium.url
        }
    })

    return gifs;

}