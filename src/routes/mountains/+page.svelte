<h1>Mountains Page</h1>

<script>
    export let data;
    const {artworks} = data;
    console.log(artworks);
</script>

<article>
    {#each artworks as { title, api_link, image_id, artist_title, date_display, medium_display}}
    <figure>
      <img src="https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg" alt="">
      <figcaption><strong><a href="{api_link}">{title}</a></strong> by {artist_title}<br>{date_display} | {medium_display}</figcaption>
    </figure>
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
  
  