import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";
import Author from "./Author";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." />
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Author author="Kimmy Waweru"/>
    </div>
  );
}

export default BlogPost;
