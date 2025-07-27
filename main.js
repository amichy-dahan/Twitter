import { Twitter } from './model.js';
import { Renderer } from './render.js';


addEventListener("DOMContentLoaded", () => {


    const twitter = new Twitter();
    const renderer = new Renderer();


    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
        const input = document.getElementById("postT");
        twitter.addPost(input.value);
        renderer.renderPosts(twitter.getPosts());
        input.value = ""
    })

})


