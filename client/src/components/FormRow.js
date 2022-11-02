const FormRow = ({type, name, value, handleChange, labelText }) => (
  <div className="form-row">
    <label className="form-label">{labelText || name}</label>
    <input
      className="form-input"
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
    />
  </div>
);

export default FormRow;
