import React from "react";
import styles from "./Account.module.css";

const Account = () => {
  return (
    <div className={styles.profile}>
      <div className={styles["login-container"]}>
        <div className={styles["login-content"]}>
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <button className={styles["register-button"]}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
