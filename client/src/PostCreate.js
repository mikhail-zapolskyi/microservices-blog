import React, { useState } from 'react';
import axios from 'axios';


const PostCreate = () => {
     const [title, setTitle] = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();

          await axios.post('http://posts.com/posts/create', {title});

          setTitle('');
     };

     return (
          <form onSubmit={handleSubmit} className='form'>
               <div className="form-group">
                    <label >Title</label>
                    <input className='form-control' value={ title } onChange={(e) => setTitle(e.target.value)}/>
               </div>
               <button className='btn btn-primary'>Submit</button>
          </form>
     )
};

export default PostCreate;