import {
    Blog
} from "./Blog";

export class BlogPost {
    title: string;
    content: string;
    blogPostID: number;
    blog: string;

    constructor(
        title: string,
        content: string,
        blogPostID: number,
        blog: string,
    ) {
        this.title = title;
        this.content = content;
        this.blogPostID = blogPostID;
        this.blog = blog;
    }
}

export const BlogPosts: BlogPost[] = [];