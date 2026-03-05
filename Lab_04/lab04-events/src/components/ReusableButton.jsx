export default function ReusableButton({
  label,
  onClick,
  type = "button",
  disabled = false,
}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className="btn">
      {label}
    </button>
  );
}