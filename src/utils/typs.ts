export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
    vote: Vote[];
    comments: PostComment[];
    commentsTotal: number;
    upVotesTotal: number;
    downVotesTotal: number;
    tags: Tag[];
    createdAt: Date;
};

export type PostComment = {
    id: number;
    body: string;
    dateCreated: Date;
}

export type Vote = {
    userId: number;
    postId: number;
    value: number;
}

export type Tag = {
    id: number;
    name: string;
}

export interface AppProps {
    post: Post,
    posts: Post[],
    comment: PostComment,
    comments: PostComment[],
    filter: string,
    vote: Vote,
    tag: Tag
}