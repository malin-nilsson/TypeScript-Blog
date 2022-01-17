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

// Get the query portion of the current URL
let url: string = window.location.search;
let urlParams: URLSearchParams = new URLSearchParams(url);

// Get the ID value from the query string
for (let value of urlParams.values()) {
    let idfromURL: string = value;

    /* Look for the ID in the blog array
     and compare it to ID in the query string */
    for (let i: number = 0; i < blogList.length; i++) {
        let idFromObject: string = blogList[i].id.toString();

        // If they match, load the blog and blog post
        if (idFromObject === idfromURL) {
            loadClickedBlog(blogList[i]);
            loadBlogPosts(blogList[i]);
        }
    }
}

// Display blog that was clicked
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

// Display blog posts from clicked blog
function loadBlogPosts(clickedBlog: Blog) {
    let nameFromBlogPost: string = clickedBlog.name;

    for (let i = 0; i < blogPosts.length; i++) {
        let nameFromBlog: string = blogPosts[i].blog;

        if (nameFromBlog === nameFromBlogPost) {
            let smallHeading: HTMLHeadingElement = document.querySelector("h2");
            let blogPostContainer: HTMLDivElement = document.createElement("div");
            let blogTitleDateContainer: HTMLDivElement = document.createElement("div");
            let blogPostContentContainer: HTMLDivElement = document.createElement("div");
            let blogPostTitle: HTMLParagraphElement = document.createElement("p");
            let blogPostDate: HTMLSpanElement = document.createElement("span");
            let blogPostContent: HTMLParagraphElement = document.createElement("p");
            let plusIcon: HTMLSpanElement = document.createElement("span");

            blogPostTitle.innerHTML = blogPosts[i].title;
            blogPostDate.innerHTML = "Date: " + blogPosts[i].date;
            blogPostContent.innerHTML = blogPosts[i].content;

            blogPostContainer.classList.add("blogpost-container");
            blogTitleDateContainer.classList.add("blogtitledate-container");
            blogPostContentContainer.classList.add("blogcontent-container");
            blogPostTitle.classList.add("blogpost-title");
            blogPostDate.classList.add("blogpost-date");
            blogPostContent.classList.add("blogpost-content-hide");
            plusIcon.classList.add("add-icon");

            smallHeading.after(blogPostContainer);
            blogPostContainer.appendChild(blogTitleDateContainer);
            blogTitleDateContainer.appendChild(blogPostTitle);
            blogPostTitle.prepend(plusIcon);
            blogTitleDateContainer.appendChild(blogPostDate);
            blogPostContainer.appendChild(blogPostContentContainer);
            blogPostContentContainer.appendChild(blogPostContent);

            blogPostContainer.addEventListener("click", () => {
                blogPostContent.classList.toggle("blogpost-content");
                plusIcon.classList.toggle("minimize-icon");
            });
        }
    }
}