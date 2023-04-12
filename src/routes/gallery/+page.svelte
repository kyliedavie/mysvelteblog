<h1>Gallery Page</h1>

<p>The Art Institute of Chicago is one of the most renowned art museums in the world. Located in the heart of downtown Chicago, the museum houses an extensive collection of artwork that spans centuries and includes pieces from cultures around the globe. With over 300,000 works of art on display, visitors can explore everything from ancient Egyptian artifacts to contemporary works of art.</p>

<p>One of the most iconic pieces in the Art Institute's collection is Grant Wood's "American Gothic," which has become an enduring symbol of American culture. Other notable works include Vincent van Gogh's "The Bedroom," Georges Seurat's "A Sunday on La Grande Jatte," and Edward Hopper's "Nighthawks." The museum also features a collection of contemporary art, including works by Andy Warhol, Roy Lichtenstein, and Jeff Koons.</p>
    
<p>In addition to its impressive collection of artwork, the Art Institute of Chicago offers a range of educational programming and events for visitors of all ages. The museum hosts lectures, workshops, and guided tours that provide insight into the art on display and the history and culture that inspired it. With its commitment to art education and its diverse collection of artwork, the Art Institute of Chicago is a must-see destination for anyone interested in art and culture.</p>

<script>
    export let data;
    const {artworks} = data;
    console.log(data);
</script>
  
<h2>Links to Artworks as JavaScript Objects</h2>
<article>
    {#each artworks as { title, api_link, image_id }}
    <a href="{api_link}">{title}</a>
    <!-- add image tag here, use image_id and template
    sample id: 6b1edb9c-0f3f-0ee3-47c7-ca25c39ee360
    url: https://www.artic.edu/iiif/2 + image_id + /full/843,/0/default.jpg -->
    {/each}
</article>

  
  
<style>
    article {
        padding: 2em;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2em;
    }
</style>

<!-- <script>
    export async function load({ fetch }) {
      const url = 'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_title,date_display,medium_display&page=1&limit=1';
      const artReq = await fetch(url);
      const artRes = await artReq.json();
      const artworks = artRes.data;
      return {
        props: {
          artwork: artworks[0]
        }
      };
    }
  </script>

<template>
    <div>
      <h1>{artwork.title}</h1>
      <img src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`} alt={artwork.title}>
      <p>{artwork.artist_title}</p>
      <p>{artwork.date_display}</p>
      <p>{artwork.medium_display}</p>
    </div>
  </template> -->
  
  