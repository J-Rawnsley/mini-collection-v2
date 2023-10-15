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
      <p className="blurb">Landing page code on <a href="https://github.com/J-Rawnsley/mini-collection-v2">GitHub</a></p>
      <Linkbox />
    </div>
  );
}

export default App;
