import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCard } from "../Contexts/ShoppingCardContext";
import ShoppingCard from "../ShoppingCard/ShoppingCard";

const Navbar = () => {
  const { cardItems, isModalOpen, openModal, closeModal } = useShoppingCard();

  const handleCartIconClick = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      openModal();
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles["main-nav"]}>
        <div className={styles["main-link"]}>
          <Link to="/">Anasayfa</Link>
          <Link to="/products">Ürünler</Link>
          <Link to="/about">Hakkımızda</Link>
        </div>
      </div>
      <div className={styles["nav-basket-icon"]}>
        <Link to="/account">Hesabım</Link>
        <button onClick={handleCartIconClick}>
          <FaCartShopping className={styles["cart-icon"]} />
          {cardItems.length > 0 && (
            <div className={styles["cart-items-count"]}>{cardItems.length}</div>
          )}
        </button>
      </div>
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <ShoppingCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
