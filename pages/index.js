import Head from 'next/head'

import DepartmentHome from '../Component/DepartmentHome'


export default function Home() {
  return (
    <div>
      
      {/* <section>
      <div className={styles.section2}></div>
      </section> */}
      <section>
        <DepartmentHome />
      </section>
    </div>
  )
}
