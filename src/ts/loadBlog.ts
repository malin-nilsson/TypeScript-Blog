import {
    blogList,
    blogPosts
} from "./main";
import {
    Blog
} from "./models/Blog";
import {
    BlogPost
} from "./models/BlogPost";

let url: string = window.location.search;
let urlParams: URLSearchParams = new URLSearchParams(url);

for (let value of urlParams.values()) {
    let idfromURL: string = value;

    // Look through the product catalog for the ID and compare it to ID in URL
    for (let i: number = 0; i < blogList.length; i++) {
        let idFromObject: string = blogList[i].id.toString();

        if (idFromObject === idfromURL) {
            loadClickedBlog(blogList[i]);
            loadBlogPosts(blogList[i]);
        }
    }
}

function loadClickedBlog(clickedBlog) {
    let blogContainer: HTMLDivElement = document.querySelector(".blog-container");
    let blog: HTMLDivElement = document.createElement("div");
    let blogName: HTMLHeadingElement = document.createElement("h1");
    let smallHeading: HTMLHeadingElement = document.createElement("h2");

    blogContainer.appendChild(blog);
    blog.appendChild(blogName);
    blog.appendChild(smallHeading);

    smallHeading.innerHTML = "Blog Posts:"
    blogName.innerHTML = clickedBlog.name;

}

function loadBlogPosts(clickedBlog: Blog) {
    let nameFromBlogPost: string = clickedBlog.name;

    for (let i = 0; i < blogPosts.length; i++) {
        let nameFromBlog: string = blogPosts[i].blog;

        if (nameFromBlog === nameFromBlogPost) {
            let smallHeading: HTMLHeadingElement = document.querySelector("h2");
            let blogPost: HTMLDivElement = document.createElement("div");
            let blogPostTitle: HTMLParagraphElement = document.createElement("p");
            let blogPostContent: HTMLParagraphElement = document.createElement("p");
            let plusIcon: HTMLSpanElement = document.createElement("span");

            blogPostTitle.classList.add("blogpost-title");
            blogPostContent.classList.add("blogpost-content-hide");
            plusIcon.classList.add("add-icon");

            blogPostTitle.innerHTML = blogPosts[i].title;
            blogPostContent.innerHTML = blogPosts[i].content;

            smallHeading.after(blogPost);
            blogPost.appendChild(blogPostTitle);
            blogPostTitle.prepend(plusIcon);
            blogPost.appendChild(blogPostContent);

            blogPostTitle.addEventListener("click", () => {
                blogPostContent.classList.toggle("blogpost-content");
            });
        }
    }
}