import React, { useState } from 'react';


function deleteBlog() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Blog Post 1', content: 'Content for Post 1'},
        {id: 2, title: 'Blog Post 2', content: 'Content for Post 2'},
        // ... Add more initial posts here
    ]);

    const handleDelete = (postId) => {
        // Show a confirmation dialog to confirm deletion
        const confirmDelete = window.confirm('Are you sure you want to delete this blog post?');

        if (confirmDelete) {
            // Send a DELETE request to the server (not shown here)

            // Update the UI by filtering out the deleted post
            setPosts(posts.filter((post) => post.id !== postId));
        }
    };

}

export default deleteBlog;
