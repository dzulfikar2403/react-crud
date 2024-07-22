import { useState } from "react";
import FormInput from "../components/fragment/FormInput";
import NavLayout from "../components/layout/NavLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBlog = () => {
  const [valueInput, setValueInput] = useState({
    title: '',
    blog: '',
    writter: 'dzulfikar',
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const {name,value} = e.target;
    setValueInput(pre => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await axios.post('http://localhost:8000/blogs', valueInput)

    console.log(data);
    navigate('/');
  }

  return ( 
    <NavLayout>
      <h2 className="text-xl font-medium">New Blog</h2>
      <FormInput onSubmit={handleSubmit} >
        <FormInput.InputField name="title" value={valueInput.title} type="text" onChange={handleInput} />
        <FormInput.InputField name="blog" value={valueInput.blog} rowCol={{ row: 5}} onChange={handleInput} />
        <select name="writter" value={valueInput.writter} onChange={handleInput} className="w-3/4 px-2 py-1">
          <option value="dzulfikar">dzulfikar</option>
          <option value="panjul">panjul</option>
        </select>
      </FormInput>
      {/* <button className="bg-teal-950 rounded-md shadow text-white p-1" onClick={(e) => handleClick("Hello World!",e)}>click me!</button> */}
    </NavLayout>
   );
}
 
export default NewBlog;