import Footer from "./Footer";
import Header from "./Header";
import classes from "./Layout.module.scss";

function Layout(props) {
  return (
    <div className={classes.Layout}>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
