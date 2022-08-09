import React from 'react';

const CommentList = ({ comments }) => {
     const renderedComments = comments.map(comment => {
          let content;
          console.log(comment.status)

          if(comment.status === 'approved') {
               content = comment.content
          } else if (comment.status === 'rejected') {
               content = 'This comment has been rejected'
          } else {
               content = 'This comment is awating moderation'
          };

          return <li key={ comment.id }>{ content }</li>
     })

     return <ul>{ renderedComments }</ul>
};

export default CommentList;