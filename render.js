
export class Renderer {

    renderPosts(posts) {
    const postHtml = document.getElementById("post");
    postHtml.innerHTML = "";
    posts.forEach(post => {
      // new post
        const newpost = document.createElement("div");
        newpost.classList.add("post-text");
        newpost.textContent = post.text;
        newpost.setAttribute("data-id",post.id);
        postHtml.appendChild(newpost);

        // ------------------------------------->
// input and buttun for comment
        // ------------------------------------->
          
        const br = document.createElement("br");
        const add = document.createElement("input");
        add.id=`input-commet_${post.id}`;
        add.setAttribute("data-id",post.id);
        const btn = document.createElement("button");
        btn.id ="btnCommet";
        btn.textContent = "add Commet";
        btn.setAttribute("data-id",post.id);

        newpost.appendChild(br)
        newpost.appendChild(add)
        newpost.appendChild(btn)

        
        // ------------------------------------->
        //    SHow COMMNETS
        // ------------------------------------->
        
        const comments = document.createElement("div");
        comments.classList.add("comments");
        
        comments.setAttribute("data-id",post.id);

        post.comments.forEach(comment => {
            const newComment = document.createElement("div");
            const x = document.createElement("div")
            newComment.classList.add("comment");
            newComment.textContent =  comment.text;
           
            //x
            x.id = "delete-comment";
            x.setAttribute("data-id",comment.id);
            x.setAttribute("data-x",post.id);
           
            x.textContent = "X"
            //comment
            comments.appendChild(newComment);
            newComment.appendChild(x);
             
        });
        newpost.appendChild(comments);
       
        const btnDp = document.createElement("button");
        btnDp.id ="btnDp";
        btnDp.textContent = "delete post";
        btnDp.setAttribute("data-id",post.id);

         newpost.appendChild(btnDp)
        // newpost.appendChild(btn)
        
    });
}





}



