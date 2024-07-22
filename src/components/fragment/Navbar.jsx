import { useNavigate } from "react-router-dom";
import Link from "../elements/Link";

const Navbar = () => {
  const navigate = useNavigate();
  return ( 
    <>
      <div className="flex justify-between py-2 px-4  border-b-2 border-b-violet-400">
        <h1 className="text-2xl cursor-pointer" onClick={()=> navigate('/')}>Simple Blogs</h1>
        <Link />
      </div>
    </>
   );
}
 
export default Navbar;