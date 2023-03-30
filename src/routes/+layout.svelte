<script>
    import '../global.css';
  </script>

<nav>
    <a href="/">Home</a>
    <a href="/posts">Posts</a>
    <a href="/favs">Favs</a>
    <a href="/resources">Resources</a>
    <a href="/donate">Donate</a>
    <a href="/about">About</a>
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
      color: seagreen;
    }
    main {
      grid-row: 2;
    }
    footer {
    grid-row: 3;
    position: sticky;
    bottom: 0;
  }
</style>