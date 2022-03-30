import React from 'react'
import "./styles/blogcard.css"

const BlogCard = ({img}) => {
  return (
    <div>
         <div class="pen-wrapper">

<article  className="chip">
  <a className="chip-link" href="/"> 
    <img className='chip-hero wp-post-image' src={img} alt="BlogHeader" />                                  
    <div className="chip-text">
      <h3 className="chip-title">Create a memory wall with polaroids and lights in just an hour!</h3>
      <p className="chip-description">wall of memories that stay long up but takes just an hour to set up. Start eith our pakage and let it light up...</p>
    </div>
  </a>
</article>
    </div>
    </div>
  )
}

export default BlogCard