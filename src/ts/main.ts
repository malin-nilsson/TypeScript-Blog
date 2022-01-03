import {
    Blog
} from "./models/Blog";

import {
    Blogs
} from "./models/Blog";

import {
    BlogPost
} from "./models/BlogPost";

import {
    createBlog
} from "./createBlog";

import { 
    validateForms 
} from "./formValidation";

export let blogList: Blog[] = JSON.parse(localStorage.getItem("Blogs")) || [];
export let blogPosts: BlogPost[] = JSON.parse(localStorage.getItem("Blog posts")) || [];


window.onload = function () {
    let button: HTMLButtonElement = document.getElementById("new-blog") as HTMLButtonElement;
    button.addEventListener("click", createBlog)

    validateForms();
}


