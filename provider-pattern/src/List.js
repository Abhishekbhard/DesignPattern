import ListItem from "./ListItem";
const List = () => {
  return (
    <ul className="list">
      {new Array(10).fill(0).map((x, i) => (
        <ListItem key={i} />
      ))}
    </ul>
  );
};
export default List;
