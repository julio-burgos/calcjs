import * as math from "mathjs";
import React, { FormEventHandler, useState } from "react";

function Home() {
  const [input, setInput] = useState("");
  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
    const expr = math.parse(input);

    expr.toTex();

    const result = math.evaluate(input);
    console.log(result);
  };
  return <div>Home</div>;
}

export default Home;
