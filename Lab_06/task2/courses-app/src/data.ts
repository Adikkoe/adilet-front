export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React Basics",
    instructor: "Adilet",
    description: "Learn JSX, components, and props.",
  },
  {
    id: 2,
    title: "React Router",
    instructor: "Adilet",
    description: "Learn routing, navigation, and dynamic routes.",
  },
  {
    id: 3,
    title: "TypeScript in React",
    instructor: "Adilet",
    description: "Learn interfaces, props typing, and state typing.",
  },
  {
    id: 4,
    title: "Hooks Deep Dive",
    instructor: "Adilet",
    description: "Learn useState, useEffect, and custom hooks.",
  },
];

export function getCourseById(id: number) {
  return courses.find((course) => course.id === id);
}