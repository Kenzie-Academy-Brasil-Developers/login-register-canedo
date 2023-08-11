export const Input = ({ label, id, type, placeholder, value, setValue }) => {
  return (
     <div>
        <label htmlFor={id}>{label}</label>
        <input
           placeholder={placeholder}
           type={type}
           name={id}
           id={id}
           value={value}
           onChange={(event) => setValue(event.target.value)}
        />
     </div>
  );
};