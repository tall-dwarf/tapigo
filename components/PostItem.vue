<template>
    <div>
        <NuxtLink :to="`/${post.id}`" class="mb-4 d-block">
            <img :src="post.img" alt="Image" class="img-fluid rounded">
        </NuxtLink>
        <h2>
            <NuxtLink :to="`/${post.id}`">{{ post.title }}</NuxtLink>
        </h2>
        <p>{{ post.description }}</p>
        <p>
            <NuxtLink :to="`/${post.id}`">
                Читать далее
            </NuxtLink>
        </p>
        
    </div>
</template>


<script lang="ts" setup>

defineProps<{
    post: IPost
}>()

</script>