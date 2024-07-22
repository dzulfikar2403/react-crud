const Button = ({children,type,disabled,onClick}) => {
  return ( 
    <button type={type} disabled={disabled} onClick={onClick} className="p-1 rounded text-sm font-sans bg-purple-400 text-white transition-all disabled:bg-purple-200 active:bg-purple-300" >{children}</button>
   );
}
 
export default Button;