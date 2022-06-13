import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { initialState, reducer } from "../Component/redux/reducer";
import { StateProvider } from "../Component/redux/StateProvider";
import Navbar from "../Component/Navbar";


function MyApp({ Component, pageProps }) {
  return (
    <>
      
      <div className={styles.another}>
        <StateProvider initialState={initialState} reducer={reducer}>
        
          <Navbar />
          <Component {...pageProps} />
        </StateProvider>
      </div>
    </>
  );
}

export default MyApp;
