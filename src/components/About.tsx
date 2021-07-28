import classes from "styles/About.module.css";
import { Link } from "wouter";
function About() {
  return (
    <div>
      <section className={classes.MainSection}>
        <h2>CalcJS</h2>
        <div>Fully Featured Calculator app</div>
        <Link to="/" className={classes.GetStarted}>
          Get Started
        </Link>
      </section>
      <section className={classes.Features}>
        <div>
          <div> Multiple Unit Conversion </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            numquam assumenda totam, temporibus nam laudantium magni rem nisi.
            Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
            excepturi iure.
          </div>
        </div>
        <div>
          <div> Simplify expressions </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            numquam assumenda totam, temporibus nam laudantium magni rem nisi.
            Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
            excepturi iure.
          </div>
        </div>
        <div>
          <div>
            Symbolic <br /> Algebra
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            numquam assumenda totam, temporibus nam laudantium magni rem nisi.
            Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
            excepturi iure.
          </div>
        </div>
        <div>
          <div> Exporting to Latex Equation</div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
            numquam assumenda totam, temporibus nam laudantium magni rem nisi.
            Assumenda ipsum culpa eius optio nobis illo. Velit facere ea
            excepturi iure.
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
