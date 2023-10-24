import type { IPost, IComment } from "./useBlogStore";

export const defaultPosts: IPost[] = [{
    id: 1,
    title: "Пост 1",
    date: "10.20.2003",
    description: "описание поста 1",
    text: "текст поста 1",
    img: "images/hero_3.jpg"
}, {
    id: 2,
    title: "Пост 2",
    date: "10.20.2006",
    description: "описание поста 2",
    text: "текст поста 2",
    img: "images/hero_1.jpg"
}, {
    id: 3,
    title: "Пост 3",
    date: "10.20.2005",
    description: "описание поста 3",
    text: "текст поста 3",
    img: "images/hero_2.jpg"
}, {
    id: 4,
    title: "Пост 4",
    date: "10.20.2004",
    description: "описание поста 4",
    text: "текст поста 4",
    img: "images/hero_3.jpg"
}]

export const defaultcomments: IComment[] = [
    {
        id: 1,
        postId: 1,
        text: "Коммент 1",
        author: "Вася пупкин",
        date: "20.10.2004",
        parent: null
    },
    {
        id: 2,
        postId: 1,
        text: "Коммент 2",
        author: "Вася пупкин",
        date: "20.10.2004",
        parent: null
    },
    {
        id: 3,
        postId: 1,
        text: "Коммент 3",
        author: "Игорь пупкин",
        date: "20.10.2004",
        parent: 1
    },
    {
        id: 4,
        postId: 1,
        text: "Коммент 4",
        author: "Вася пупкин",
        date: "20.10.2004",
        parent: null
    },
    {
        id: 5,
        postId: 1,
        text: "Коммент 5",
        author: "Игорь пупкин",
        date: "20.10.2004",
        parent: 1
    },
    {
        id: 56,
        postId: 1,
        text: "Коммент 6",
        author: "Игорь пупкин",
        date: "20.10.2004",
        parent: 2
    },
]