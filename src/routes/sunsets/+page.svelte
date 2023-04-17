<h1>Sunsets Page</h1>

<script>
    export let data;
    const {artworks} = data;
    console.log(artworks);
</script>
<!--   
<h2>Links to Artworks as JavaScript Objects</h2> -->
<article>
    {#each artworks as { title, api_link, image_id, artist_title, date_display, medium_display}}
    <figure>
      <img src="https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg" alt="">
      <!-- <a href="{api_link}">{title}</a> -->
      <figcaption><strong><a href="{api_link}">{title}</a></strong> by {artist_title}<br>{date_display} | {medium_display}</figcaption>
    </figure>
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
    figcaption {
        color: white;
    }
    a {
        text-decoration: none;
    }
</style>