import Course from "./Course";

const Kurssit = ({ courses }) => {
  return (
    <div>
      <ul>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
};

export default Kurssit;
