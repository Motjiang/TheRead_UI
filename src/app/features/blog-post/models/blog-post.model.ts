import { Category } from "../../category/models/category.model";

export interface BlogPost {
    id: string;
    title: string;
    shortDescription: string;
    content:string;
    featuredImageUrl:string;
    urlHandle:string;
    author:string;
    publishDate: Date;
    isVisible: boolean;
    categories: Category[];
}

