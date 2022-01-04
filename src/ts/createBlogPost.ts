import {
    validateForms
} from "./formValidation";

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

let modal: HTMLDivElement = document.getElementById("modal") as HTMLDivElement;

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onload = function () {
    showBlogsInForm()
    validateForms();

    let button: HTMLButtonElement = document.getElementById("new-post") as HTMLButtonElement;
    button.addEventListener("click", createBlogPost)
}



function showBlogsInForm() {
    let dropdown: HTMLSelectElement = document.getElementById("select-blog") as HTMLSelectElement;
    for (let i = 0; i < blogList.length; i++) {
        let option: HTMLOptionElement = document.createElement("option");
        option.innerHTML = blogList[i].name;
        option.setAttribute("value", blogList[i].name);
        dropdown.appendChild(option);
    }
}

function createBlogPost() {
    let title: HTMLInputElement = document.getElementById("title") as HTMLInputElement;
    let titleValue = title.value;
    let content: HTMLTextAreaElement = document.getElementById("content") as HTMLTextAreaElement;
    let contentValue = content.value;
    let blogid: number = Math.floor(Math.random() * 1000);
    let blogName: HTMLSelectElement = document.getElementById("select-blog") as HTMLSelectElement;
    let blogNameValue = blogName.selectedOptions[0].value;

    if (titleValue || contentValue || blogNameValue) {
        blogPosts.push(new BlogPost(titleValue, contentValue, blogid, blogNameValue));
        localStorage.setItem("Blog posts", JSON.stringify(blogPosts));
        modal.style.display = "block";
        let closeModal: HTMLDivElement = document.querySelector(".close-wrapper");
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        })

    }

}