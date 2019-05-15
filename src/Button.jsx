import React from "react";
import { Link } from "react-router-dom";
import styles from "./MyButton.module.css";

const MyButton = props => {
   return (
      <>
         <Link
            className={styles.myButton}
            to={{
               pathname: `/game/${props.name}`,
               state: {
                  promo: props.promo,
                  trailer: props.trailer
               }
            }}
         >
            go to {props.name} page
         </Link>
      </>
   );
};

export default MyButton;
