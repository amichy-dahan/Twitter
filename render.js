
export class Renderer {

    renderPosts(posts) {
        const postHtml = document.getElementById("post");
        postHtml.innerHTML = ""
        posts.forEach(post => {
            const newpost = document.createElement("div");
            newpost.classList.add("post-text");
            newpost.dataset.id = post.id;
            newpost.textContent = post.text;
            postHtml.appendChild(newpost);
        });
    }



}



