import {
    Blog
} from "./Blog";

export class BlogPost extends Blog {
    title: string;
    content: string;
    blogid: number;

    constructor(
        name: string,
        id: number,
        author: string,
        title: string,
        content: string,
        blogid: number,
    ) {
        super(name, id, author);
        this.title = title;
        this.content = content;
        this.blogid = blogid;
    }
}