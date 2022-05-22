import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function DepartmentHome() {
  const router = useRouter();
  var dpt = [
    "Applied Mechanics",
    "Automobile Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Engineering",
    "Electrical Engineering",
    "Electronics and Communication ",
    "Environment Engineering",
    "Environment Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Plastic Engineering",
    "Rubber Technology",
    "Textile Technology",
  ];
  return (
    <>
      <div className={styles.departmentMain}>
        {dpt.map((name) => {
          return (
              <Link href={"/books?dep="+name+"#" +name}>
                  
            <div className={styles.card}>
              <div>
                <Image
                  src="/Images/CS.jpg"
                  width={300}
                  height={270}
                  layout="responsive"
                  alt="Not Load"
                  className={styles.imgres}
                />
              </div>
              <div className={styles.departmentName}>{name}</div>
            </div>
              </Link>
          );
        })}
      </div>
    </>
  );
}

export default DepartmentHome;
