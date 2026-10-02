import styles from "./CourseDetails.module.css";

function CourseDetails({ course }) {
  if (!course) {
    return <p>Please select a course to view details.</p>;
  }
  return (
    <div className={styles.courseDetails}>
      <h2>Course Details</h2>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
    </div>
  );
}

export default CourseDetails;