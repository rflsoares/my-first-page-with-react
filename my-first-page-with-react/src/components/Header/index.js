import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <span>My logo</span>
      <nav>
        <a href="#"> Home </a>
        <a href="#"> Contact </a>
      </nav>
    </header>
  );
}

export default Header;
