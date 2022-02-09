import classes from "./Contact.module.scss";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <section className={classes["section-contact"]}>
      <div className='row'>
        <div className={classes.contact}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
