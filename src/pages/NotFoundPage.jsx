import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import e from "../assets/404nf.png";

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <div>
        <img src={e} alt="error 404 page not found." />
      </div>
      <p>The page you are looking for does not exist.</p>

      <Link to="/" className={styles.kkk}>
        Go to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
