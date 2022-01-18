import {
    blogList, blogPosts
} from "./main";

window.onload = function () {
    loadBlogs()
}

let blogs: HTMLDivElement = document.querySelector(".blogs");

// Display all blogs

function loadBlogs() {

    if (blogList.length > 0) {
        // Loop through blogs in local storage and create HTML
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
    } else {
        let messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");
        let message = document.createElement("p");
        message.innerHTML = "It's empty here right now!";
        let button = document.createElement("a");
        button.classList.add("start-blog-button")
        button.innerHTML = "Start a blog"
        button.setAttribute("href", "index.html")

        blogs.appendChild(messageContainer);
        messageContainer.appendChild(message);
        messageContainer.appendChild(button);


    }

}