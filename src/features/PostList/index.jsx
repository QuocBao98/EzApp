import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

PostList.propTypes = {
   posts: PropTypes.array,
};

PostList.defaultProps = {
   posts: [],
};

function PostList(props) {
   const { posts } = props;

   return (
      <div>
         <ul className="post-list">
            {posts.map((post) => (
               <li key={post.id}>
                  <img width="50" height="50" src={post.imageUrl}></img>
                  {post.title}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default PostList;
