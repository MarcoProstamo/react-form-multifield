import { useState } from "react";

export default function Badge({ badge }) {
  const [status, setStatus] = useState(false);
  function handleChange(e) {
    console.log(e);

    setStatus(e.target.checked);
  }
  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        id={badge}
        onChange={handleChange}
      />
      <label className="btn btn-outline-light m-1 fs-5" htmlFor={badge}>
        {badge}
      </label>
    </>
  );
}
