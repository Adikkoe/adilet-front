import type { User } from "../types";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <div
      style={{
        border: "1px solid #444",
        padding: 12,
        borderRadius: 12,
        marginBottom: 10,
      }}
    >
      <strong>{user.name}</strong>
      <div style={{ opacity: 0.85 }}>{user.email}</div>
      <div style={{ opacity: 0.85 }}>Age: {user.age}</div>
    </div>
  );
}