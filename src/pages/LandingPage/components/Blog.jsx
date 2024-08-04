/* eslint-disable no-unused-vars */
import React from "react";
import BlogCard from "../../../components/BlogCard";
import { blogs } from "../../../lib/data-placeholder";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container flex flex-col gap-8 mx-auto my-20">
      <div className="flex justify-between items-center align-middle">
        <h1 className="text-4xl font-bold">
          Our <span className="text-[#7848f4]">Blogs</span>
        </h1>
      </div>{" "}
      <div className="grid grid-cols-3 gap-10">
        {blogs.map((blog, index) => {
          return <BlogCard key={index} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
