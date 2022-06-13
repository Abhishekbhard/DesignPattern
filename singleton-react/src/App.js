import singletonCounter from "./singleton/counter";
import BlueButton from "./component/blueButton";
import RedButton from "./component/redButton";

function App() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <BlueButton />
      <RedButton />
    </div>
  );
}

export default App;
