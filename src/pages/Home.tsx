import Error from "components/Error";
import Result from "components/Result";
import * as math from "mathjs";
import { FormEventHandler, useState } from "react";
import classes from "styles/Home.module.css";
function Home() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>();
  const [error, setError] = useState<any>();
  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
    const expr = math.parse(input);
    console.log({ expr });
    try {
      const r = expr.compile().evaluate();
      setResult(r);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error);
      setResult(undefined);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img height="128px" src="assets/logo.svg"></img>
        <span>Calc</span>
        <span>JS</span>
      </div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.searchInput}>
          <input
            type="text"
            value={input}
            onChange={(ev) => setInput(ev.target.value)}
            placeholder="Type your math doubt"
          />
          <div className={classes.searchButton}>🔍 </div>
        </div>
      </form>
      {error && <Error error={error} />}
      {result && <Result result={result} />}
    </div>
  );
}

export default Home;
