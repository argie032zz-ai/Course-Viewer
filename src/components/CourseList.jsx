import styles from "./CourseList.module.css";

function CourseList({ courses, onSelectCourse }) {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul className={styles.courseList}>
        {courses.map((course) => (
          <li
            key={course.id}
            className={styles.courseItem}
            onClick={() => onSelectCourse(course)}
          >
            <strong>{course.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
