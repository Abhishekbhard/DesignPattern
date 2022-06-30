import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title
        render={() => (
          <h1>
            <span role="img" aria-label="emoji">
              ✨
            </span>
            I am a render prop!{" "}
            <span role="img" aria-label="emoji">
              ✨
            </span>
          </h1>
        )}
      />
    </div>
  );
}
const Title = (props) => props.render();

export default App;
