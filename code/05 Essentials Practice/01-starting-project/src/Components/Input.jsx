export default function Input({ label, value, handleChange }) {

  return (
    <div>
      <label htmlFor="">{label}</label>
        <input type="number" value={value} onChange={handleChange} />
    </div>
  );
};
