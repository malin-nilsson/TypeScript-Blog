import { createBlog } from "./createBlog";
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

// Get the query string
let urlParams: URLSearchParams = new URLSearchParams(window.location.search);

// Look for the ID in the query string
let idFromURL: string = urlParams.get("id");

/* If ID in query string matches blog ID,
display blog and blog posts */
blogList.forEach(blog => {
    let idFromBlog: string = blog.id.toString();

    if (idFromBlog === idFromURL) {
        loadClickedBlog(blog);

    }
})



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

    loadBlogPosts(clickedBlog);
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
            let deleteButton: HTMLButtonElement = document.createElement("button");
            let plusIcon: HTMLSpanElement = document.createElement("span");

            blogPostTitle.innerHTML = blogPosts[i].title;
            blogPostDate.innerHTML = "Date: " + blogPosts[i].date;
            blogPostContent.innerHTML = blogPosts[i].content;
            deleteButton.innerHTML = "Delete post";

            deleteButton.dataset.blogId = blogPosts[i].blogPostID.toString();

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
            blogPostContent.appendChild(deleteButton)

            blogPostContainer.addEventListener("click", () => {
                blogPostContent.classList.toggle("blogpost-content");
                plusIcon.classList.toggle("minimize-icon");
            });

            deleteButton.addEventListener("click", () => {
                let blogid = deleteButton.getAttribute("data-blog-id");
                let index = blogPosts.findIndex(i => (i.blogPostID.toString() === blogid))

                blogPosts.splice(index, 1)
                localStorage.setItem('Blog posts', JSON.stringify(blogPosts));

            })
        
    } else {
        let placeholder = document.createElement("p");
        let blogContainer: HTMLDivElement = document.querySelector(".blog-container");
        let createBlogPostButton: HTMLAnchorElement = document.createElement("a");

        createBlogPostButton.classList.add("blog-button");
        createBlogPostButton.setAttribute("href", "newpost.html")
        placeholder.innerHTML = "Thing are empty here!";
        createBlogPostButton.innerHTML = "Create a new post"
        blogContainer.appendChild(placeholder);
        blogContainer.appendChild(createBlogPostButton);
    }
}
}