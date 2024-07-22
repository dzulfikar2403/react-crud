import { NavLink } from "react-router-dom";

const Link = () => {
  return ( 
    <nav className="flex justify-between items-center gap-4">
      <small ><NavLink to="/" className="transition-all hover:text-purple-400">Home</NavLink></small>
      <small ><NavLink to="/newblog" className="transition-all hover:text-purple-400">New Blog</NavLink></small>
    </nav>
   );
}
 
export default Link;