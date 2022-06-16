import singletonCounter from "./singleton/counter";
import BlueButton from "./component/blueButton";
import RedButton from "./component/redButton";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        background: "green",
        textAlign: "center",
      }}
    >
      <BlueButton />
      <RedButton />
    </div>
  );
}

export default App;
