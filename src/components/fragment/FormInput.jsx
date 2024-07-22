import Button from "../elements/Button";

const FormInput = ({children,onSubmit}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex justify-between items-center flex-col px-4 py-2 bg-slate-200 border border-slate-300 rounded-md w-4/5 mx-auto">
          {children}
          <div className="pt-4">
            <Button type="submit">Submit!</Button>
          </div>
        </div>
      </form> 
    </>
  );
};

export const InputField = ({name,type,value,onChange,rowCol={row:4 ,col:20}}) => {
  return (
    <div className="flex flex-col w-3/4 py-1">
      <label htmlFor={name} className="font-mono text-gray-500">
        {name}
      </label>
      {type ? 
        <input type={type} name={name} id={name} value={value} className="outline-none p-1 rounded" onChange={onChange}/>
      :
        <textarea name={name} id={name} value={value} className="outline-none p-1 rounded" rows={rowCol.row} cols={rowCol.col} onChange={onChange}></textarea>
      }
    </div>
  );
};

FormInput.InputField = InputField;

export default FormInput;
