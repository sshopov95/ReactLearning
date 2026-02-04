const TextAreaInput = ({label, name, value, onChange, required = false}) => {
    return (<div className="mb-4">
            <label htmlFor={name} className="block font-semibold">
              {label}
            </label>
            <textarea
              name={name}
              type="text"
              className="w-full p-2 border rounder-lg"
              value={value}
              //onChange={(e) => setDescription(e.target.value)}
              onChange={onChange}
              required={required}
            />
          </div>  );
}
 
export default TextAreaInput;