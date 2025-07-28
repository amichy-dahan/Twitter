import { Twitter } from './model.js';
import { Renderer } from './render.js';


addEventListener("DOMContentLoaded", () => {


    const twitter = new Twitter();
    const renderer = new Renderer();
  


    const btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
        const input = document.getElementById("postT");
        console.log(input.value);
        twitter.addPost(input.value)
        renderer.renderPosts(twitter.getPosts());
        input.value = ""
    })



   document.addEventListener("click",(event)=>{
    const clickedElement = event.target;
    if(clickedElement.id === "btnCommet" ){
      console.log(event.target.dataset.id)
     
      const input = document.getElementById(`input-commet_${event.target.dataset.id}`);
      console.log(input.value)
      twitter.addComment(event.target.dataset.id, input.value)
    
     renderer.renderPosts(twitter.getPosts());
    }
      
    })


 document.addEventListener("click", (event) => {

    const clickedElement = event.target;
    if(clickedElement.id === "delete-comment"){
      console.log(event.target.dataset.id)
       console.log(event.target.dataset.x)
      
       
        twitter.removeComment(event.target.dataset.x,event.target.dataset.id)
    
      renderer.renderPosts(twitter.getPosts());
    }

    })

 document.addEventListener("click",(event)=>{
    const clickedElement = event.target;
    if(clickedElement.id === "btnDp" ){
      twitter.removePost(event.target.dataset.id)
     renderer.renderPosts(twitter.getPosts());
    }
      
    })




    // const x = document.getElementById("delete-comment");

    // x.addEventListener("click", () => {

    //     const commentId = btn.dataset.commentId;
    //     const postId = btn.dataset.postId;
    //     twitter.removeComment(postId, commentId);
    //     renderer.renderPosts(twitter.getPosts());

    // })
    
    // const btnC = document.getElementById("btnCommet");
    
    // btnC.addEventListener("click",()=>{
    //     const input = document.getElementById("input-commet");
    //     twitter.addComment(btnC.dataset.id, input.value)
    //     console.log(input.value)
    //     renderer.renderPosts(twitter.getPosts());
    // })


})


