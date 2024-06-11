import React from 'react'
import './Stylesheet/blog.css'
import { Link } from 'react-router-dom'

function Blog() {
  return (
 <>
    
    <div className="blog-container">
            <ul className='blog-list'>
                <li className='navItems'>
                   <Link to="/">Home</Link> 
                </li>
                <li className='navItems'>
                 <Link to="/blog">Blogs Columns</Link> 
                </li>
            </ul>
        </div>
    
        
 
 </>
  )
}

export default Blog