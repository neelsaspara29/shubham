import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useStateValue } from "./redux/StateProvider";
import { useRouter } from "next/router";

const Navbar = () => {
  const  router  = useRouter();
  const [{ booksUrl, cart }] = useStateValue();
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
              <Link href={"/books/" + booksUrl}>
                <a>Books</a>
              </Link>
            </li>
            <li key={"books"}>
              <Link href="/cart">
                <a>cart</a>
              </Link>
            </li>
          </ul>
          <div className={styles.navLogin}>
            <span>{cart.length}</span>
            <Image
              src="/Images/cart.png"
              width={25}
              height={25}
              onClick={() => {
                router.push("/cart");
              }}
            />
            <span>
              <Link href="/signin">Sign</Link>
            </span>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
