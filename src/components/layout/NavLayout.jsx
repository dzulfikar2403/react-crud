import Navbar from "../fragment/Navbar";

const NavLayout = ({ children }) => {
  return (
    <div className="w-[600px] mx-auto ">
      <Navbar />
      <section className="p-4">{children}</section>
    </div>
  );
};

export default NavLayout;
