const Input = ({ type, id, label, placeholder }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
};

export default Input;
