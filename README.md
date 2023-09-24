<h1 align="center">
  <a href="">
    <img src="/src/assets/music-releases.svg" alt="Project Banner Image">
  </a>
</h1>

# Music Releases

Ths weeks project is about using data from Spotify with React to build a page which shows new album and single releases.

### The Problem

Structure
Main.jsx > App.jsx > Album.jsx. Album.jsx has 4 children: AlbumName.jsx, ArtistName.jsx, CoverImage.jsx, Header.jsx

I started the project by trying to understand the concepts of how React works. Then I build the folder structure and created components from the design. I started with the top component and created props to pass data to child components. Finally I focused on the CSS to try to make the site look as much as possible to the design request provided.

Main problem: My main problem was getting the icons to display in 'full white'. They are behaving in the way that they should, but it's like they have 50% opacity. I've tried different strategies to fix this (e.g. changing opacity, filter on brightness, played around with the hover effects, changing to the raw svg-files), but nothing has worked and due to time issues I'm leaving this as is.

Had issues with the icons not showing on the deployed site, finally solved it by importing them from the folder.

If I had more time I would definitly work on the opacity on the icons because this bugs me 😅.

### View it live

https://project-music-release-susanne.netlify.app/
