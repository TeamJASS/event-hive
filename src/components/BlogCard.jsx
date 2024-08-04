/* eslint-disable react/prop-types */

const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl shadow-md border gap-4 relative bg-white">
      <span className="absolute top-7 left-7 py-2 px-4 text-sm text-[#7848f4] bg-white rounded-md">
        {blog.price > 0 ? event.price : "FREE"}
      </span>
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-md bg-cover  w- [387px] h-[331px]"
      />
      <h4 className="font-normal">{blog.title}</h4>
      <p className="text-xs text-[#7848F4]">
        {blog.date}, {blog.time}
      </p>
      <p className="text-xs text-gray-600">
        {blog.location === "online" ? (
          <>
            ONLINE EVENT - <small> Attend anywhere</small>
          </>
        ) : (
          blog.lcoation
        )}
      </p>
    </div>
  );
};

export default BlogCard;
