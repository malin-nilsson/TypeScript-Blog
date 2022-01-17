import {
    validateForms
} from "./formValidation";
import {
    blogList
} from "./main";
import {
    Blog
} from "./models/Blog";

// Grab modal
let modal: HTMLDivElement = document.getElementById("modal") as HTMLDivElement;

// Hide modal when clicking somewhere in browser window
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Create a new blog
export function createBlog() {
    validateForms();
    let blogName: HTMLInputElement = document.getElementById("blog-name") as HTMLInputElement;
    let blogNameValue = blogName.value;
    let author: HTMLInputElement = document.getElementById("author") as HTMLInputElement;
    let authorValue = author.value;
    let id: number = Math.floor(Math.random() * 1000);

    /* If blog name and author name is set, 
    add to local storage */
    if (blogNameValue && authorValue) {
        blogList.push(new Blog(blogNameValue, id, authorValue));
        localStorage.setItem("Blogs", JSON.stringify(blogList));
        modal.style.display = "block";
        let closeModal: HTMLDivElement = document.querySelector(".close-wrapper");
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        })

    } 
}