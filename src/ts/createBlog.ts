import {
    blogList
} from "./main";
import {
    Blog
} from "./models/Blog";

window.onload = function () {

}

export function createBlog() {
    let blogName: HTMLInputElement = document.getElementById("blog-name") as HTMLInputElement;
    let blogNameValue = blogName.value;
    let author: HTMLInputElement = document.getElementById("author") as HTMLInputElement;
    let authorValue = author.value;
    let id: number = Math.floor(Math.random() * 1000);
    blogList.push(new Blog(blogNameValue, id, authorValue));
    localStorage.setItem("Blogs", JSON.stringify(blogList));
    location.href = "pages/blogs.html";
}
