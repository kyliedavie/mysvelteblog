<h1>Oceans Art</h1>

<script>
    export let data;
    const {artworks} = data;
</script>
  
<article>
    {#each artworks as { title, artist_title, image_id, date_display, medium_display }}
    <figure>
      <img src="https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg" alt="">
      <figcaption><strong>{title}</strong> by {artist_title}<br>{date_display} | {medium_display}</figcaption>
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
</style>