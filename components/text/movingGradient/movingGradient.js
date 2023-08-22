import styles from "./movingGradient.module.css";

const movingGradient = ({children}) => {
  return (
    <h1 className={styles.wrapper}>
      {children}
    </h1>
  );
};

export default movingGradient;
