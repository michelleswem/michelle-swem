import classes from "./AboutMe.module.scss";
import Image from "next/image";
import Link from "next/link";

function AboutMe() {
  return (
    <section className={classes["section-me"]}>
      <div className='row'>
        <h2 className={classes["aboutme__heading"]}>About Me</h2>
        <div className={classes["aboutme"]}>
          <figure className={classes["aboutme__shape"]}>
            <Image
              src='/assets/michelle.jpg'
              alt='Michelle Swem'
              width={150}
              height={150}
              className={classes["aboutme__img"]}
            />
          </figure>
          <p className={classes["aboutme__text"]}>
            I&apos;m a Frontend Developer and content writer with a great
            passion for building things with code. I live in Nigeria, where I
            build amazing client facing user-interfaces for websites and apps.
            As a woman who is always inspired to take up space in the society
            and cement it, I believe that When you Embrace yourself and Believe
            in your Dreams then you can be whatever you want to be as long as
            you put your heart to it. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. At officiis laudantium voluptate et officia
            necessitatibus earum nihil quam, tempora consectetur sed, minus
            iusto voluptatibus vel aliquam vero ab. Enim, voluptas!
          </p>
          <div className={classes["aboutme__socials"]}>
            <Link href='/twiter'>
              <a className={classes["aboutme__icon"]}>
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 32 32'
                >
                  <title>twitter</title>
                  <path d='M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z'></path>
                </svg>
              </a>
            </Link>
            <Link href='/git'>
              <a className={classes["aboutme__icon"]}>
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 32 32'
                >
                  <title>github</title>
                  <path d='M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z'></path>
                </svg>
              </a>
            </Link>
            <Link href='/twitter'>
              <a className={classes["aboutme__icon"]}>
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='35'
                  height='35'
                  viewBox='0 0 32 32'
                >
                  <title>codepen</title>
                  <path d='M3.375 18.266l9.422 6.281v-5.609l-5.219-3.484zM2.406 16.016l3.016-2.016-3.016-2.016v4.031zM15.203 24.547l9.422-6.281-4.203-2.812-5.219 3.484v5.609zM14 16.844l4.25-2.844-4.25-2.844-4.25 2.844zM7.578 12.547l5.219-3.484v-5.609l-9.422 6.281zM22.578 14l3.016 2.016v-4.031zM20.422 12.547l4.203-2.812-9.422-6.281v5.609zM28 9.734v8.531c0 0.391-0.203 0.781-0.531 1l-12.797 8.531c-0.203 0.125-0.438 0.203-0.672 0.203s-0.469-0.078-0.672-0.203l-12.797-8.531c-0.328-0.219-0.531-0.609-0.531-1v-8.531c0-0.391 0.203-0.781 0.531-1l12.797-8.531c0.203-0.125 0.438-0.203 0.672-0.203s0.469 0.078 0.672 0.203l12.797 8.531c0.328 0.219 0.531 0.609 0.531 1z'></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
