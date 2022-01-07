import {
    Blog
} from "./Blog";

export class BlogPost {
    title: string;
    content: string;
    blogPostID: number;
    blog: string;
    date: string;

    constructor(
        title: string,
        content: string,
        blogPostID: number,
        blog: string,
        date: string,
    ) {
        this.title = title;
        this.content = content;
        this.blogPostID = blogPostID;
        this.blog = blog;
        this.date = date;
    }
}

export const BlogPosts: BlogPost[] = [];