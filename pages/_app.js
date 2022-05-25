import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { initialState, reducer } from "../Component/redux/reducer";
import { StateProvider } from "../Component/redux/StateProvider";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <section>
        <nav className={styles.rootNav}>
          <div>
            <Image
              src="/Images/download.jpg"
              height={50}
              width={60}
              alt="Not Render"
            />
          </div>
          <ul className={styles.navUL}>
            <li key={"root"}>
              <Link href="/">
                <a>Root</a>
              </Link>
            </li>
            <li key={"how system work"}>
              <Link href="/">
                <a>How System Work?</a>
              </Link>
            </li>
            <li key={"books"}>
              <Link href="/books">
                <a>Books</a>
              </Link>
            </li>
            <li key={"books"}>
              <Link href="/cart">
                <a>cart</a>
              </Link>
            </li>
          </ul>
          <div className={styles.navLogin}>SignUP</div>
        </nav>
      </section>
      <div className={styles.another}>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Component {...pageProps} />
        </StateProvider>
      </div>
    </>
  );
}

export default MyApp;
