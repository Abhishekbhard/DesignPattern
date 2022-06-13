import singletonCounter from "../singleton/counter";

const handleDecrement = () => {
  singletonCounter.decrement();
  getCounter();
};
const getCounter = () => {
  console.log(singletonCounter.getCounter());
};

function redButton() {
  return (
    <button
      style={{
        background: "red",
        color: "white",
        padding: "15px 32px",
        borderRadius: 20,
      }}
      type="button"
      onClick={handleDecrement}
    >
      Red Button
    </button>
  );
}
export default redButton;
