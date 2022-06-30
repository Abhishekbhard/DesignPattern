export default function withStyles(Component) {
  return (props) => {
    const style = { padding: "2rem", margin: "1rem" };
    return <Component style={style} {...props} />;
  };
}
