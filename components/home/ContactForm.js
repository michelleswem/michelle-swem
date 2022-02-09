import classes from "./ContactForm.module.scss";
function ContactForm() {
  return (
    <form className={classes.form}>
      <h2 className={classes.heading}>Say Hello</h2>
      <div className={classes.form__group}>
        <label className={classes.form__label} htmlFor='name'>
          Full Name
        </label>
        <input type='text' className={classes.form__input} id='name' />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label} htmlFor='email'>
          Email Address
        </label>
        <input type='email' className={classes.form__input} id='email' />
      </div>
      <div className={classes.form__group}>
        <label className={classes.form__label} htmlFor='message'>
          Message
        </label>
        <textarea type='text' className={classes.form__textarea} id='message' />
      </div>
      <div className={classes.action}>
        <button type='submit' className={classes.btn}>
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
