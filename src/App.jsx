import data from "./data.json";
import Header from "./Components/Header";
import Album from "./Components/Album";

console.log(data);

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Album albumsArray={data.albums.items} />
    </div>
  );
};
