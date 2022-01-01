import { blogList } from "./main";


window.onload = function() {
    let url: string = window.location.search;
    let urlParams: URLSearchParams = new URLSearchParams(url);

    for (let value of urlParams.values()) {
        let idfromURL: string = value;

        // Look through the product catalog for the ID and compare it to ID in URL
        for (let i: number = 0; i < blogList.length; i++) {
            let idFromObject: string = blogList[i].id.toString();

            if (idFromObject === idfromURL) {
                loadClickedBlog(blogList[i])
            }
        }
    }
}

let blogs: HTMLDivElement = document.querySelector(".blogs");

function loadClickedBlog(clickedBlog) {
    blogs.innerHTML = "";

    let blog: HTMLDivElement = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h1");
    let author: HTMLHeadingElement = document.createElement("h2");

    blogs.appendChild(blog);
    blog.appendChild(title);
    blog.appendChild(author);

    for (let i = 0; i < blogList.length; i++) {
        title.innerHTML = blogList[i].name;
        author.innerHTML = blogList[i].author;
    }

}