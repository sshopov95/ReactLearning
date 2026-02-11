export type Project = {
    id: string;
    documentId: string,
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
    image: string;
    body: string;
}

export type BlogPostData = {
    loaderData: {
        post: PostMeta,
    }
}

export type PostFilterData={
    searchQuery: string;
    onSearchChange: (value:string) => void
}

export type LatestPostsData={
    posts: PostMeta[];
    limit?: number;
}

export type StrapiResponse<T> ={
    data: T[]
    
}

export type StrapiProject = {
    id: string,
    documentId: string,
    title: string,
    description: string,
    image?: { url: string;
        formats?:{
            thumbnail?: {url:string};
            small?: {url:string;};
            medium?:{url:string;};
            large?:{url:string;};
        }
    }
    url: string,
    date: string,
    category: string,
    featured: boolean
}

export type StrapiPost = {
    id: string,
    documentId: string,
    title: string,
    slug: string,
    excerpt: string,
    image?: { url: string;
        formats?:{
            thumbnail?: {url:string};
            small?: {url:string;};
            medium?:{url:string;};
            large?:{url:string;};
        }
    }
    date: string,
    body: string
    
}