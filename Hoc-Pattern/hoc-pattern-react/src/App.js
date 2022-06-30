function withStyles(Element) {
  return (props) => {
    const style = {
      padding: ".2rem",
      margin: ".2rem",
      color: "red",
      background: "black",
    };
    return <Element style={style} {...props} />;
  };
}

const Button = (props) => <button style={props.style}>Click me!</button>;
const Text = (props) => <p style={props.style}>Hello World!</p>;

const StyledButton = withStyles(Button);
const StyledText = withStyles(Text);

function App() {
  return (
    <>
      <StyledButton />
      <StyledText />
    </>
  );
}

export default App;
