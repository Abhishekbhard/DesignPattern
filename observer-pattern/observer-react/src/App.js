import React from "react";
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import observable from "./Observable";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function handleClick() {
  observable.notify("User clicked button!");
}

function handleToggle() {
  observable.notify("User toggled switch!");
}

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
}
function handleUnsubscribe() {
  observable.unsubscribe(toastify);
}
function getObserverCount() {
  console.log(observable.getObserver());
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  return (
    <div className="App">
      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me!"
      />
      <Button variant="contained" onClick={handleUnsubscribe}>
        UnSubscribe
      </Button>
      <Button variant="contained" onClick={getObserverCount}>
        Get Observer
      </Button>

      <ToastContainer />
    </div>
  );
}
