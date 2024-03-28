import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";
import { IoTimeOutline } from "react-icons/io5";
const Blog = ({ blog }) => {
  const {
    id,
    image,
    title,
    author,
    posted_time,
    likes,
    comments,
    description,
  } = blog || {};
  console.log(blog);
  const date = new Date(posted_time);
  return (
    <div className="grid grid-cols-12 bg-base-100  gap-4 md:gap-6 lg:gap-8 my-4 font-work border-[1px] rounded-xl p-4">
      <figure className="col-span-12 md:col-span-6 lg:col-span-4">
        <img className="rounded-md h-full object-cover object-center" src={image} alt="Album" />
      </figure>
      <div className="col-span-12 md:col-span-6 lg:col-span-8">
        <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{title}</h2>
        <p className="py-3 border-b-[1px] lg:text-lg text-c-dark">{description}</p>
        <div className="flex gap-1 md:gap-4 mt-2 justify-between text-c-light">
          <p className="flex gap-2 items-center "><IoTimeOutline></IoTimeOutline> {date.toLocaleTimeString()}</p>
          <div className="flex gap-4">
            <p className="flex gap-2 items-center"><FaRegHeart></FaRegHeart> {likes}</p>
            <p className="flex gap-2 items-center"><LiaComments></LiaComments> {comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
