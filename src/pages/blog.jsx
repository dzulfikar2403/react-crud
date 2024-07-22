import { useParams } from "react-router-dom";
import NavLayout from "../components/layout/NavLayout";
import useFetch from "../hooks/useFetch";
import Loading from "../components/elements/Loading";
import Error from "../components/elements/Error";

const Blog = () => {
  const { id } = useParams();
  const {data: blog,loading,error} = useFetch('http://localhost:8000/blogs/' + id)
  
  return ( 
    <NavLayout>
      {loading && <Loading />}
      {error && <Error />}
      {blog && (
        <article className="py-8">
          <h1 className="font-sans text-purple-600 text-xl font-medium">{blog.title}</h1>
          <pre className="text-sm pt-2 pb-4">writer: {blog.writter}</pre>
          <p className="font-sans">{blog.blog}</p>
        </article>
      )}
    </NavLayout>
   );
}
 
export default Blog;