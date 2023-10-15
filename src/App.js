import "./App.css";
import Linkbox from "./linkbox.js";
import Title from "./Title.js";
import Blurb from "./blurb.js";

// brings together three top-level elements and defines the layout of the page
function App() {
  return (
    <div className="App">
      <Title />
      <Blurb />
      <Linkbox />
      <p className="blurb">Landing page code avaiable on <a href="https://github.com/J-Rawnsley/mini-collection-v2">GitHub</a></p>
    </div>
  );
}

export default App;
