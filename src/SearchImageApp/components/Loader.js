import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
      </div>
    );
  }
}
