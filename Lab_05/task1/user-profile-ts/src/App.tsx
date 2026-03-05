import UserCard from "./components/UserCard"
import SkillList from "./components/SkillList"
import { User, Skill } from "./types"

function App() {

  const user: User = {
    name: "Adilet",
    email: "adilet@mail.com",
    age: 20
  }

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Intermediate" },
    { id: 2, name: "TypeScript", level: "Beginner" },
    { id: 3, name: "Git", level: "Intermediate" }
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab 05 — User Profile</h1>

      <UserCard user={user}>
        <p>React + TypeScript student</p>

        <SkillList skills={skills} />
      </UserCard>
    </div>
  )
}

export default App