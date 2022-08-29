import styles from "./TextGlitch.module.css";

const TextGlitch = ({ children }) => {
  return (
    <h1 className={styles.glitch}>
      <span aria-hidden="true">{children}</span>
      {children}
      <span aria-hidden="true">{children}</span>
    </h1>
  );
};

export default TextGlitch;
