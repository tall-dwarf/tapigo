<template>
    <ul class="comment-list">
        <li v-for="comment in getFirstLvlComments()" :key="comment.id" class="comment">
            <div class="vcard bio">
                <img src="images/person_3.jpg" alt="Image">
            </div>
            <div class="comment-body">
                <h3>{{comment.author}}</h3>
                <div class="meta">{{comment.date}}</div>
                <p>{{comment.text}}</p>
                <p><a @click="emit('reply', comment.id)" href="#comment-form" class="reply">Ответить</a></p>
            </div>

            <ul class="children">
                <li v-for="childComment in getCommentsByParentId(comment.id)" class="comment">
                    <div class="vcard bio">
                        <img src="images/person_5.jpg" alt="Image">
                    </div>
                    <div class="comment-body">
                        <h3>{{childComment.author}}</h3>
                        <div class="meta">{{childComment.date}}</div>
                        <p>{{childComment.text}}</p>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script lang="ts" setup>

const props = defineProps<{
    comments: IComment[]
}>()

const getFirstLvlComments = () => {
    return props.comments.filter(comment => comment.parent === null)
}

const getCommentsByParentId = (parentId: number) => {
    return props.comments.filter(comment => comment.parent === parentId)
}

const emit = defineEmits<{
    (e: "reply", id: number): void 
}>()

</script>