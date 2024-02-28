import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from './Article';
import { FaSearch } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const BlogList = () => {
//   const blogs = [
//     { id: 1, title: 'Blog 1', content: 'Content for Blog 1' },
//     { id: 2, title: 'Blog 2', content: 'Content for Blog 2' },
//     { id: 3, title: 'Blog 3', content: 'Content for Blog 3' },
//   ];
const [searchTerm, setSearchTerm] = useState('');
const filteredBlogs = articles.filter(blog =>
  blog.title.toLowerCase().includes(searchTerm.toLowerCase() ) 
);


  return (
    <div className='blog-list-section'>
      <div className='container'>
      <h1>Blog List</h1>
      <div className='search-bar position-relative'>
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch className='search-icon'/>
      </div>

       {filteredBlogs.length > 0 ? (
      <ul className='row p-0'>
        {filteredBlogs.map(blog => (
          <li key={blog.id} className="col-12 col-md-6 col-lg-4 col-xl-3 p-0">
           <div className='card'>
            <Link to={`/newblog/${blog.id}`}>
            <img className='d-block img-fluid blog-img' src={blog.img } alt=""/>
              
              </Link>
              <div className='row my-1'>
                <span className='col-12 col-md-6'><CgProfile /> {blog.author}</span>
                <span className='col-12 col-md-6'><CiCalendarDate /> {blog.date}</span>
              </div>
              <p className='my-1 blog-category'>{blog.category}</p>
              <h5 className='my-1 blog-title'>{blog.title}</h5>
              
               <p className='my-1 blog-desc'>{blog.desc}</p>
               <Link to={`/newblog/${blog.id}`}>Read More...</Link>
               </div>
          </li>
        ))}
      </ul>
       ): (
        <p>No matching blogs found.</p>
      )}


    </div>
    </div>
  );
}

export default BlogList;