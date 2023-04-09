import React, { useState } from "react";

// function countInital() {
//   console.log("run function");
//   return 4;
// }

function App() {
  // const [count, setCount] = useState(countInital());

  // const [count, setCount] = useState(() => {
  //   console.log("run function");
  //   return 4;
  // });

  // const [state, setState] = useState({ count: 4, theme: "blue" });
  // const count = state.count;
  // const theme = state.theme;

  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    // setState((prevState) => {
    //   return { ...prevState, count: prevState.count - 1 };
    // });
    setTheme("red");
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("blue");
  }

  return (
    <div className="center">
      <button onClick={decrementCount} className="minus">
        -
      </button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount} className="plus">
        +
      </button>
    </div>
  );
}

export default App;
