import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to Zarianne's Course Viewer App!</h1>
      <p>Click on "Courses" to see the list of available courses.</p>
    </div>
  );
}

export default HomePage;
