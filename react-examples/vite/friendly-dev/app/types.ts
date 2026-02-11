export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    category: string;
    featured: boolean;
}


export type PostMeta = {
    id:string;
    slug:string;
    title:string;
    excerpt: string;
    date: string;
}

export type BlogPostData = {
    loaderData: {
        postMeta: PostMeta,
        markdown: string
    }
}

export type PostFilterData={
    searchQuery: string;
    onSearchChange: (value:string) => void
}