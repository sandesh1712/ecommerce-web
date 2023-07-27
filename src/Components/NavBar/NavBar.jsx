import styles from "./NavBar.module.css";

function NavBar() {
  const onClickNavItems = (url) => {
    window.location.href = url;
  };

  return (
    <ul className={styles.navbar}>
      <li
        className={styles.nav_items}
        onClick={() => {
          onClickNavItems("/");
        }}
      >
        Home
      </li>
      <li
        className={styles.nav_items}
        onClick={() => {
          onClickNavItems("/orders");
        }}
      >
        Orders
      </li>
      <li
        className={styles.nav_items}
        onClick={() => {
          onClickNavItems("/account");
        }}
      >
        My Account
      </li>
    </ul>
  );
}
export default NavBar;
