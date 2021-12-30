import {
    blogList
} from "./main";

window.onload = function() {
loadBlogs()
}

function loadBlogs() {
let blogs: HTMLDivElement = document.querySelector(".blogs");

for (let i = 0; i < blogList.length; i++) { 
let blogContainer: HTMLDivElement = document.createElement("div");
let blog: HTMLParagraphElement = document.createElement("p");
let authorName: HTMLParagraphElement = document.createElement("p");

blogContainer.classList.add("blog-container");
blog.classList.add("blog");
authorName.classList.add("author-name");

blog.innerHTML = blogList[i].name;
authorName.innerHTML = "Created by: " + blogList[i].author;

blogContainer.appendChild(blog);
blogContainer.appendChild(authorName);
blogs.appendChild(blogContainer)

}
}

