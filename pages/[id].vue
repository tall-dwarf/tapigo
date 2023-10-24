<template>
  <div class="site-section-cover overlay inner-page bg-light" :style="'background-image:' + `url(${post?.img})`">
    <div class="container">
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-lg-10">

          <div class="box-shadow-content">
            <div class="block-heading-1">
              <span class="d-block mb-3 text-white">{{ post?.date }}</span>
              <h1 class="mb-4">{{ post?.title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-8 blog-content">
          <p class="lead">{{ post?.text }}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae expedita cumque necessitatibus ducimus debitis
            totam, quasi praesentium eveniet tempore possimus illo esse, facilis? Corrupti possimus quae ipsa pariatur
            cumque, accusantium tenetur voluptatibus incidunt reprehenderit, quidem repellat sapiente, id, earum
            obcaecati.</p>
            <p><a @click="parentId = null" href="#comment-form" class="reply">Оставить комментарий</a></p>
          <div class="pt-5">
            <h3 class="mb-5">{{comments.length}} Комментариев</h3>
            <CommentList @reply="(id) => parentId = id" :comments="comments" />
            <CommentForm @formSubmit="commentFormSubmit" />
          </div>
          
        </div>

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { CommentForm } from '~/components/CommentForm.vue';
definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(route.params.id as string)
  }
})

const route = useRoute()
const postId = Number(route.params.id)

const blogStore = useBlogStore();
const post = blogStore.getPostbyid(postId)
const comments = computed(() => blogStore.getCommentsByPostId(postId)) 

const parentId = ref< null | number>(null)

const commentFormSubmit = (data: CommentForm) => {
  blogStore.addComment(postId, data.text, data.name, parentId.value)
}

</script>

<style></style>