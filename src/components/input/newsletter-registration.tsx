import { registerNewsletter } from "@/action/newsletter";
import classes from "./newsletter-registration.module.css";

const NewsletterRegistration = () => {
  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form action={registerNewsletter}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
