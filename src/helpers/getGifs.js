export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ category }&api_key=M81jl1G4Hab6zlqduhD6frHUd1tgLpXK&limit=20`
    const resp = await fetch( url )
    const { data } = await resp.json()
    
    const gifs = data.map( img => ({
        id    : img.id,
        title : img.title,
        url   : img.images.downsized_medium.url
    }))

    return gifs;
}