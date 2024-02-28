import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import articles from "./Article"
import { CiCalendarDate } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const SingleBlog = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const filteredBlogs = articles.filter(blog =>
  //   blog.title.toLowerCase().includes(searchTerm.toLowerCase() ) 
  // );
  
  
  const { blogId } = useParams();
  const blog = articles.find(blog => blog.id === parseInt(blogId, 10));
  const [searchTerm] = useState('');
  if (!blog) {
    return <div>Blog not found</div>;
  }
  const relatedBlogs = articles.filter(otherBlog =>
    otherBlog.id !== blog.id &&
    otherBlog.tags && Array.isArray(otherBlog.tags) &&
    otherBlog.tags.some(tag =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  // Assuming you fetch blog data from an API or database based on the id
  // const blog = { id: 1, title: 'Blog 1', content: 'Content for Blog 1' };
 
  return (
    <div className='singleblog'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-8'>
          <img className='img-fluid' src={blog.img } alt=""/>
          <div className='row my-1'>
                <span className='col-12 col-md-2'><CgProfile /> {blog.author}</span>
                <span className='col-12 col-md-6'><CiCalendarDate /> {blog.date}</span>
              </div>
          <h2>{blog.title}</h2>
          <h5>{blog.desc}</h5>
          <p>{blog.content}</p>
          
          </div>
          <div className='col-12 col-md-4'>
            <div className='profile-card'>
            <img className="profile-img d-block m-auto img-fluid" src={blog.profileImage} alt=""></img>
            <h3 className='text-center text-white'>{blog.author}</h3>
            <p className='text-center text-white'>{blog.desc}</p>
            <div class="social-icons d-flex justify-content-center">
            <RiFacebookFill />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterestP />
            </div>
            </div>
            <h2>Related Blogs:</h2>
            <ul>
        {relatedBlogs.map(blog => (
          <li className='d-flex my-2' key={blog.id}>
            <div className='col-4 p-1'>
            <img className="related-blogimg img-fluid" src={blog.img} alt=""/>
            </div>
            
            <div className="col-7 p-1">
            <strong><Link to={`/newblog/${blog.id}`}>{blog.title}</Link></strong>
            <p>{blog.date}</p>
            </div>
            
          </li>
        ))}
      </ul>
            {/* <input
        type="text"
        placeholder="Search comments..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}

      {/* <ul>
        {filteredBlogs.map(comment => (
          <li key={comment.id}>
           <Link to={`/newblog/${comment.id}`}><strong>{comment.title}:</strong></Link>  
          </li>
        ))}
      </ul> */}
      {/* <ul>
        {searchTerm
          ? filteredBlogs.map(comment => (
              <li key={comment.id}>
                <strong>{comment.author}:</strong> {comment.text}
              </li>
            ))
          : blog.comments.map(comment => (
              <li key={comment.id}>
                <strong>{comment.author}:</strong> {comment.text}
              </li>
            ))}
      </ul> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default SingleBlog;
