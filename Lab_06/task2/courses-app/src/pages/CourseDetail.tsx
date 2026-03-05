import { useLoaderData, useParams } from "react-router-dom";
import type { Course } from "../data";

export default function CourseDetail() {
  const { id } = useParams();

  const { course } = useLoaderData() as { course: Course };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
      <p>Route ID parameter: {id}</p>
    </div>
  );
}