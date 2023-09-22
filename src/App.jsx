import React, { useState } from 'react';
import './App.css';
import BlogPost from "./BlogPost.jsx";
import deleteBlog from "./deleteBlog.jsx";

function App() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', author: '', image: null });
    const handleDelete = (postId) => {
        // Show a confirmation dialog to confirm deletion
        const confirmDelete = window.confirm('Are you sure you want to delete this blog post?');

        if (confirmDelete) {
            // Send a DELETE request to the server (not shown here)

            // Update the UI by filtering out the deleted post
            setPosts(posts.filter((post) => post.id !== postId));
        }
    };


    const handleNewPostChange = (event) => {
        const { name, value, files } = event.target;

        if (name === 'image') {
            setNewPost({ ...newPost, [name]: files[0] });
        } else {
            setNewPost({ ...newPost, [name]: value });
        }
    };

    const handleNewPostSubmit = () => {
        if (newPost.title && newPost.content && newPost.author) {
            const newPostData = {
                ...newPost,
                id: posts.length + 1,
                date: new Date().toLocaleDateString(),
            };
            setPosts([...posts, newPostData]);
            setNewPost({ title: '', content: '', author: '', image: null });
        } else {
            alert('Please fill in all required fields (Title, Content, Author)');
        }
    };

    return (
        <div className="container">
            <h1>Welcome to My Blog</h1>
            <BlogPost
                title="Sample Blog Post"
                content="This is the content of the sample blog post."
                author="John Doe"
                date="September 20, 2023"
            />
            <BlogPost
            title="Sample Blog Post2"
            content="This is the content of the sample blog post2."
            author="Susan Shrestha"
            date="June 20, 2002"
        />
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={newPost.title}
                    onChange={handleNewPostChange}
                    required
                />
                <textarea
                    name="content"
                    placeholder="Content"
                    value={newPost.content}
                    onChange={handleNewPostChange}
                    required
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={newPost.author}
                    onChange={handleNewPostChange}
                    required
                />
                <input
                    type="file"
                    name="image"
                    onChange={handleNewPostChange}
                />
                <button type="button" onClick={handleNewPostSubmit}>
                    Create Post
                </button>
            </form>
                <div className="blog-posts">
                {posts.map((post) => (
                    <div key={post.id} className="blog-post">
                        <h2>{post.title}</h2>

                        <div className="post-content">{post.content}</div>
                        {post.image && (
                            <img
                                src={URL.createObjectURL(post.image)}
                                alt="Post"
                                className="post-image"
                            />
                        )}
                        <p className="post-info">
                            By {post.author} on {post.date}
                        </p>
                        <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(post.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                            </svg>
                            Delete
                        </button>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
