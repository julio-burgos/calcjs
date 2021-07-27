import * as math from "mathjs";
import React, { FormEventHandler, useState } from "react";
import "./App.css";
function App() {
  const handleSubmit: FormEventHandler = (ev) => {
    ev.preventDefault();
    const expr = math.parse(input);

    expr.toTex();

    const result = math.evaluate(input);
    console.log(result);
  };
  const [input, setInput] = useState("");
  return (
    <div className="whole">
      {" "}
      <header>
        <ul>
          <li>Home</li>
          <li>Doc</li>
          <li>About</li>
        </ul>

        <div>
          <img
            src="https://lh3.googleusercontent.com/ogw/ADea4I7dPbfTQjYXtHhWNa0eoljoceGahW7G6qM_rNZDNg=s32-c-mo"
            alt=""
          />
          <form onSubmit={handleSubmit}>
            <input
              name="search"
              id="search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </form>
        </div>
      </header>
      <main>
        <section>
          <h2>Main Product</h2>
          <div>Where Ai and health meets</div>
          <button>Get Started</button>
        </section>
        <section>
          <div>
            <div> Title </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              numquam assumenda totam, temporibus nam laudantium magni rem nisi.
              Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
              excepturi iure.
            </div>
          </div>
          <div>
            <div> Title </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              numquam assumenda totam, temporibus nam laudantium magni rem nisi.
              Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
              excepturi iure.
            </div>
          </div>
          <div>
            <div> Title </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              numquam assumenda totam, temporibus nam laudantium magni rem nisi.
              Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
              excepturi iure.
            </div>
          </div>
          <div>
            <div> Title </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              numquam assumenda totam, temporibus nam laudantium magni rem nisi.
              Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
              excepturi iure.
            </div>
          </div>
        </section>
      </main>
      <footer>
        <ul>
          <li>Reference</li>
          <li>API</li>
          <li>Help</li>
        </ul>
        <ul>
          <li>Github</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
