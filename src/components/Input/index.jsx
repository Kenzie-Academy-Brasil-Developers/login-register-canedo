import "./style.scss"

export const Input = ({ label, id, type, placeholder, register, error }) => {
   return (
     <div>
        <label htmlFor={id}>{label}</label>
        <input
            className="placeholder"
            placeholder={placeholder}
            type={type}
            name={id}
            id={id}
            {...register}
            />
            {error? <p className="error">{error.message}</p> : null}
     </div>
  );
};