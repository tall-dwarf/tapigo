import { defaultPosts, defaultcomments } from "./data"


export const useBlogStore = defineStore("blog", {
    state: () => {
        return {
            posts: defaultPosts as IPost[],
            comments: defaultcomments as IComment[]
        }
    },

    getters: {
        getPostbyid: (state) => (postId: number) => state.posts.find(post => post.id === postId),
        getCommentsByPostId: (state) => (postId: number) => state.comments.filter(comment => comment.postId === postId),
    },

    actions: {
        addComment(postId: number, text: string, author: string, parent: number | null) {
            this.comments.push({ date: new Date().toString(), id: new Date().getTime(), postId, text, author, parent })
        }
    }
})

export interface IPost {
    id: number,
    title: string,
    date: string,
    description: string,
    text: string
    img: string
}

export interface IComment {
    id: number
    postId: number,
    text: string,
    author: string,
    date: String
    parent: number | null
}