import "./App.css";
const Title = (props) => (
  <>
    {props.renderFirstComponent()}
    {props.renderSecondComponent()}
    {props.renderThirdComponent()}
  </>
);
function App() {
  return (
    <div className="App">
      <Title
        renderFirstComponent={() => <h1>✨ First render prop! ✨</h1>}
        renderSecondComponent={() => <h2>🔥 Second render prop! 🔥</h2>}
        renderThirdComponent={() => <h3>🚀 Third render prop! 🚀</h3>}
      />
    </div>
  );
}

export default App;
