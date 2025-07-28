export class Twitter {
    constructor() {
        this.posts = [];
        this.postIdCounter = 0;
        this.commentIdCounter = 0;
    }

    getPosts() {
        return this.posts;
    }

    addPost(text) {
        if(text === ""){

        }else{
        const newPost = { id: `p${this.postIdCounter++}`, text: text, comments: [] };
        this.posts.push(newPost);
        }
    }

    removePost(postID) {
        this.posts = this.posts.filter(post => post.id !== postID);
    }

    addComment(postID, text) {


        if (text === ""){

        }else{
        const post = this.posts.find(post => post.id === postID);
        if (post) {
            const newComment = { id: `c${this.commentIdCounter++}`, text: text };
            post.comments.push(newComment);
            console.log(newComment.id)
            
        }
    }
   
    }

    removeComment(postID, commentID) {
        const post = this.posts.find(post => post.id === postID);
        if (post) {
            post.comments = post.comments.filter(comment => comment.id !== commentID);
        }
    }
}



