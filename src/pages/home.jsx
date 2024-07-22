import { useEffect, useState } from "react";
import Error from "../components/elements/Error";
import NavLayout from "../components/layout/NavLayout";
import useFetch from "../hooks/useFetch";
import Button from "../components/elements/Button";
import Loading from "../components/elements/Loading";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { data: blogs, error, loading } = useFetch("http://localhost:8000/blogs");
  const [dataTemp, setDataTemp] = useState(null);
  const [filtering, setFiltering] = useState(null);
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setDataTemp(blogs);
    setFiltering(blogs);
  }, [blogs]);

  // console.log(delayed);
  const searchData = (e) => {
    const val = e.target.value.toLowerCase();
    setValue(val);
    const filteringData = dataTemp.filter((el) => el.title.toLowerCase().includes(val));
    setFiltering(filteringData);
  };

  const deleteData = (e,id) => {
    e.stopPropagation();
    const del = dataTemp.filter(el => el.id !== id);
    setDataTemp(del); // untuk mengupdate State pada searching data selanjutnya bahwa nilai sudah dihapus
    setFiltering(del.filter(el => el.title.toLowerCase().includes(value))); //menggunakan variable del karna dataTemp baru saja diupdate. jika menggunakan dataTemp, harus menunggu state dataTemp diUpdate dulu dengan cara menyelesaikan eksekusi function terlebih dahulu.  
  }

  return (
    <NavLayout>
      <h2 className="text-xl font-medium">Home Page</h2>
      <input type="text" onChange={searchData} placeholder="search" className="p-1 rounded outline-none" />
      {error && <Error typeErr="fetch" />}
      {loading && <Loading />}
      <ul>
        {filtering &&
          filtering.map((el) => (
            <li key={el.id}>
                <div className="flex gap-4 my-2 ">
                  <p className="cursor-pointer" onClick={() => navigate('blogs/'+el.id)}>{el.title}</p> 
                  <Button type="button" onClick={(e) => deleteData(e, el.id)}>Delete</Button>
                </div>
            </li>
          ))}
      </ul>
    </NavLayout>
  );
};

export default Home;
