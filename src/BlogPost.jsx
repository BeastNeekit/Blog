import React from 'react';

// Define a BlogPost component
function BlogPost(props) {
    const { title, content, author, date } = props;

    return (
        <article className="blog-post">
            <h2>{title}</h2>
            <p className="post-info">
                By {author} on {date}
            </p>
            <div className="post-content">{content}</div>
        </article>
    );
}

export default BlogPost;
