import { Skill } from "../types"

interface SkillListProps {
  skills: Skill[]
}

export default function SkillList({ skills }: SkillListProps) {

  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.id}>
          {skill.name} - {skill.level}
        </li>
      ))}
    </ul>
  )
}