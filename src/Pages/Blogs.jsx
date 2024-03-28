import { useLoaderData } from 'react-router-dom';
import Blog from '../components/Blog';

const Blogs = () => {
  const blogs = useLoaderData()
  
  return (
    <div>
      {
        blogs.map(blog=><Blog blog={blog} key={blog?.id}></Blog>)
      }
    </div>
  );
};

export default Blogs;