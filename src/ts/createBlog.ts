import {
    validateForms
} from "./formValidation";
import {
    blogList
} from "./main";
import {
    Blog
} from "./models/Blog";

let modal: HTMLDivElement = document.getElementById("modal") as HTMLDivElement;


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

export function createBlog() {
    validateForms();
    let blogName: HTMLInputElement = document.getElementById("blog-name") as HTMLInputElement;
    let blogNameValue = blogName.value;
    let author: HTMLInputElement = document.getElementById("author") as HTMLInputElement;
    let authorValue = author.value;
    let id: number = Math.floor(Math.random() * 1000);

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