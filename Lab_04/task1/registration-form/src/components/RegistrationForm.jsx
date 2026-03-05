import { useState } from "react";

export default function RegistrationForm() {
  // fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // errors (string)
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  // success
  const [success, setSuccess] = useState(false);

  // ✅ validation functions (spec талап)
  const validateName = (v) => {
    const value = v.trim();
    if (!value) return "Name is required";
    if (value.length < 2) return "Name must be at least 2 characters";
    return "";
  };

  const validateEmail = (v) => {
    const value = v.trim();
    if (!value) return "Email is required";
    // PDF-та берілген regex (осыны қолдан)
    const regex = /[\s@]+@[\s@]+\.[\s@]+/;
    if (!regex.test(value)) return "Invalid email format";
    return "";
  };

  const validateAge = (v) => {
    const value = String(v).trim();
    if (!value) return "Age is required";
    const n = Number(value);
    if (Number.isNaN(n)) return "Age must be a number";
    if (n < 18) return "Age must be 18+";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ міндетті :contentReference[oaicite:5]{index=5}
    setSuccess(false);

    // validate on submit
    const ne = validateName(name);
    const ee = validateEmail(email);
    const ae = validateAge(age);

    setNameError(ne);
    setEmailError(ee);
    setAgeError(ae);

    if (ne || ee || ae) return;

    setSuccess(true);

    // reset fields
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div className="field">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            const v = e.target.value;
            setName(v);
            setNameError(validateName(v)); // ✅ validate on change :contentReference[oaicite:6]{index=6}
          }}
        />
        {nameError && <p className="error">{nameError}</p>}
      </div>

      <div className="field">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            const v = e.target.value;
            setEmail(v);
            setEmailError(validateEmail(v));
          }}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>

      <div className="field">
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => {
            const v = e.target.value;
            setAge(v);
            setAgeError(validateAge(v));
          }}
        />
        {ageError && <p className="error">{ageError}</p>}
      </div>

      <button type="submit">Submit</button>

      {success && (
        <p className="success">Registration successful!</p> // ✅ талап :contentReference[oaicite:7]{index=7}
      )}
    </form>
  );
}