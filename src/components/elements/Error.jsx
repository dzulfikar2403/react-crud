import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/img/404error.png";
import Button from "./Button";

const Error = ({typeErr = "notFound"}) => {
  const navigate = useNavigate()

  return (
    <div className={typeErr === "notFound" ? 'w-[600px] mx-auto h-screen flex justify-between items-center py-20 gap-7' : 'flex justify-between items-center py-20 gap-7'}>
      <img src={errorImg} alt="404" width="200" />
      <div>
        <pre className="py-2 text-xl">
          <strong>404.</strong> {typeErr === "notFound" ? "That's page cannot be found !" : (typeErr === "fetch" && "That's an Error") }.
        </pre>
        <h4 className="text-base mb-5">The requested URL /error was not found on this server.</h4>
        {typeErr === "notFound" && <Button onClick={() => navigate("/")} >Back to HomePage...</Button>}
        <a href="https://storyset.com/online" ><small className="block my-3 text-gray-300">Online illustrations by Storyset</small></a>
      </div>
    </div>
  );
};

export default Error;
