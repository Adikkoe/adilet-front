import { ReactNode } from "react"
import { User } from "../types"

interface UserCardProps {
  user: User
  isActive?: boolean
  children: ReactNode
}

export default function UserCard({
  user,
  isActive = true,
  children
}: UserCardProps) {

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        opacity: isActive ? 1 : 0.5
      }}
    >
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>

      {children}
    </div>
  )
}