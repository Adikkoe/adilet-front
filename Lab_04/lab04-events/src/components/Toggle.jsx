import { useState } from "react";

// ✅ render props pattern: render({ on, toggle })
export default function Toggle({ render }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn((p) => !p);

  return render({ on, toggle });
}