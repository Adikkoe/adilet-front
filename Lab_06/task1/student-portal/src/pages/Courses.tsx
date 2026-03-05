interface Course {
  id: number;
  title: string;
}

const courses: Course[] = [
  { id: 1, title: "React Fundamentals" },
  { id: 2, title: "TypeScript Basics" },
  { id: 3, title: "Web Development" }
];

export default function Courses() {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
}