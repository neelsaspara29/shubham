import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";

function sidemenu({ fun }) {
  var dpt = [
    "Applied Mechanics",
    "Automobile",
    "Biomedical",
    "Chemical",
    "Civil",
    "Computer",
    "Electrical",
    "Electronics and Communication",
    "Environment",
    "Information Technology",
    "Mechanical",
    "Plastic",
    "Rubber Technology",
    "Textile Technology",
  ];
  const [first, setfirst] = useState(["name", -1]);
  const run = (name,id) => {
    setfirst([name, id]);
    console.log(first[0]);
  };
  return (
    <>
      {dpt.map((name) => {
        return (
          <>
            <ul className={styles.sidemenuUl}>
              <h3>{name}</h3>
              <li key={`${name}` + "_1"} onClick={()=>run(name,1)}>
                Sem-&#x2160;
              </li>
              <li key={`${name}` + "_2"} onClick={run(name,2)} >
                Sem-&#x2161;
              </li>
              <li key={`${name}` + "_3"} onClick={run(name,3)} >
                Sem-&#x2162;
              </li>
              <li key={`${name}` + "_4"} onClick={run(name,4)} >
                Sem-&#x2163;
              </li>
              <li key={`${name}` + "_5"} onClick={run(name,5)} >
                Sem-&#x2164;
              </li>
              <li key={`${name}` + "_6"} onClick={run(name,6)} >
                Sem-&#x2165;
              </li>
              <li key={`${name}` + "_7"} onClick={run(name,7)} >
                Sem-&#x2166;
              </li>
              <li key={`${name}` + "_8"} onClick={run(name,8)} >
                Sem-&#x2167;
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
}

export default sidemenu;
