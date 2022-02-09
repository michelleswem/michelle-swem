import classes from "./MasterHeader.module.scss";

function MasterHeader() {
  return (
    <section className={classes["master-header"]}>
      <div className={classes["master-header__box"]}>
        <h1 className={classes["master-header__primary"]}>
          I Embrace Myself.
          <br />I keep Believing In My Dreams.
        </h1>
        <h2 className={classes["master-header__secondary"]}>
          And I Can Be Whatever I want To Be As Long As I Put My Heart To It
        </h2>
      </div>
    </section>
  );
}

export default MasterHeader;
