const Course = ({ course }) => {
  const result = course.parts.map((part) => part.exercises);
  const sum = result.reduce((previousValue, currentValue, index) => previousValue + currentValue, 0);
  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <h4>total of {sum} exercises</h4>
    </div>
  );
};

export default Course;
