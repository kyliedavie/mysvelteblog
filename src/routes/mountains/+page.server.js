// default fetch load from sveltekit docs @ https://kit.svelte.dev/docs/load#making-fetch-requests
// export async function load({ fetch, params }) {
//   const res = await fetch('/api/items/${params.id}');
//   const item = await res.json();
//   return { artwork };
// }

// // my fetch function

export async function load({ fetch }) {  
    const term = "mountain";

    const url = 'https://api.artic.edu/api/v1/artworks/search?q=' + term + '&fields=image_id,title,artist_title,date_display,medium_display,api_link' + '&limit=8';

    const artReq = await fetch(url);

    const artRes = await artReq.json();

    const artworks = artRes.data;

    return {
        artworks
    }

}

// export async function load({ fetch }) {  
//     const page = Math.floor(Math.random() * 10000) + 1;

//     const url = 'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_title,date_display,medium_display&page=' + page + '&limit=8';

//     const artReq = await fetch(url);

//     const artRes = await artReq.json();

//     const artworks = artRes.data;

//     return {
//         artworks
//     }

// }

// async function loadCatArt({ fetch }) {
//     const page = Math.floor(Math.random() * 10000) + 1;
//     const url = `https://api.artic.edu/api/v1/artworks/search?q=cat&fields=image_id,title,artist_title,date_display,medium_display&page=${page}&limit=8`;
//     const artReq = await fetch(url);
//     const artRes = await artReq.json();
//     const artworks = artRes.data;
//     return artworks;
//   }
  
//   async function exportCatArt({ fetch }) {
//     const artworks = await loadCatArt({ fetch });
//     console.log(`Here are ${artworks.length} cat-themed artworks from the Art Institute of Chicago:`);
//     artworks.forEach(artwork => {
//       console.log(`- ${artwork.title} by ${artwork.artist_title}`);
//       console.log(`  ${artwork.image_id}`);
//     });
//   }