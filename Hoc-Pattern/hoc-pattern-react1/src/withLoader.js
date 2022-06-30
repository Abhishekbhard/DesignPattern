import React, { useEffect, useState } from "react";

export default function withLoader(Element, url) {
  return (props) => {
    const [data, setData] = useState(null);
    const style = {
      backgroud: "white",
      color: "red",
      width: "100%",
      height: "auto",
    };
    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      console.log("Inside Loading..");
      return (
        <div style={style} {...props}>
          Loading...
        </div>
      );
    }

    return (
      <div style={style} {...props}>
        Loading...
      </div>
    );
  };
}
