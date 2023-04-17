export async function load({ fetch }) {  
    const term = "sunset";

    const url = 'https://api.artic.edu/api/v1/artworks/search?q=' + term + '&fields=image_id,title,artist_title,date_display,medium_display,api_link'+ '&limit=8';

    const artReq = await fetch(url);

    const artRes = await artReq.json();

    const artworks = artRes.data;

    return {
        artworks
    }

}