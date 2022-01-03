import {
    blogList
} from "./main";

window.onload = function () {
    loadBlogs()
}

let blogs: HTMLDivElement = document.querySelector(".blogs");

function loadBlogs() {
    for (let i = 0; i < blogList.length; i++) {

        let blogContainer: HTMLDivElement = document.createElement("div");
        let blogName: HTMLParagraphElement = document.createElement("p");
        let authorName: HTMLParagraphElement = document.createElement("p");

        blogContainer.setAttribute("data-id", blogList[i].id.toString());
        blogContainer.classList.add("blog");
        blogName.classList.add("blog-name");
        authorName.classList.add("author-name");

     
        blogName.innerHTML = blogList[i].name;
        authorName.innerHTML = "Created by: " + blogList[i].author;

        blogContainer.appendChild(blogName);
        blogContainer.appendChild(authorName);
        blogs.appendChild(blogContainer)

        blogContainer.addEventListener("click", () => {
            location.href = "blog.html?id=" + blogList[i].id;
        })
    }
}
