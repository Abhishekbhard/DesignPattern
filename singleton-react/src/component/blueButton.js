import singletonCounter from "../singleton/counter";

const handleIncrement = () => {
  singletonCounter.increment();
  getCounter();
};
const getCounter = () => {
  console.log(singletonCounter.getCounter());
};

function blueButton() {
  return (
    <div>
      <button
        style={{
          background: "blue",
          color: "white",
          padding: "15px 32px",
          borderRadius: 20,
        }}
        type="button"
        onClick={handleIncrement}
      >
        Blue Button
      </button>
    </div>
  );
}
export default blueButton;
