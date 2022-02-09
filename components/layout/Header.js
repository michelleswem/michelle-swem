import Link from "next/link";
import classes from "./Header.module.scss";
import Image from "next/image";
function Header() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a className={classes["logo-box"]}>
          <Image
            src='/assets/Michelle.png'
            alt='logo'
            height={80}
            width={80}
            className={classes["logo-box__logo"]}
          />
          <span className={classes["logo-box__name"]}>Michelle Swem</span>
        </a>
      </Link>

      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>
            <Link href='/Writing' className={classes.nav__link}>
              Writing
            </Link>
          </li>

          <li className={classes.nav__item}>
            <Link href='/Projects' className={classes.nav__link}>
              Projects
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link href='/Blog' className={classes.nav__link}>
              Blog
            </Link>
          </li>
          <li className={classes.nav__item}>
            <Link href='/Shop' className={classes.nav__link}>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
