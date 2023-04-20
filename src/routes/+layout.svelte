<script>
    import '../global.css';
  </script>

<nav>
    <a href="/gallery">Gallery</a>
    <a href="/mountains">Mountains</a>
    <a href="/sunsets">Sunsets</a>
    <a href="/oceans">Oceans</a>
</nav>

<main><slot/></main>

<footer>
    &copy Kylie Davie 2023
</footer>

<style>
    nav, footer {
      display: flex;
      justify-content: space-evenly;
      padding: .5em;
      background-color:honeydew;
      color: rgb(46, 110, 139);
    }
    main {
      grid-row: 2;
    }
    footer {
    grid-row: 3;
    bottom: 0;
  }
</style>