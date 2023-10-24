<template>
    <div class="site-section" id="blog-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-5">
                    <div class="block-heading-1">
                        <span>Популярные посты блога</span>
                        <h2>Наш блог</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="post in blogStore.posts" :id="String(post.id)" class="col-md-6 col-lg-6">
                    <PostItem :post="post"  />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const blogStore = useBlogStore();

</script>

<style>
@import url("~/assets/css/bootstrap.min.css");
@import url("~/assets/css/style.css");
</style>