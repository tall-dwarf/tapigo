<template>
    <div id="comment-form" class="comment-form-wrap">
        <h3 class="mb-5">оставить комментарий</h3>
        <form @submit.prevent="formSubmit" action="#" class="">
            <div class="form-group">
                <label for="name">Ваше имя *</label>
                <input v-model="formData.name" type="text" class="form-control" id="name">
            </div>
            <div class="form-group">
                <label for="message">Сообщение *</label>
                <textarea v-model="formData.text" id="message" cols="30" rows="10" class="form-control"></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Оставить комментарий" class="btn btn-primary btn-md text-white">
            </div>
            <span v-if="error" class="text-danger">Форма не заполнена</span>
        </form>
    </div>
</template>

<script lang="ts" setup>
export type CommentForm = {
    name: string,
    text: string
}

const emit = defineEmits<{
    (e: "formSubmit", data: CommentForm): void
}>()

const formData = ref<CommentForm>({ name: "", text: "" })
const error = ref(false)

const formSubmit = () => {
    
    if (formData.value.name.length < 2 || formData.value.text.length < 2) {
        error.value = true
        return null
    }

    error.value = false
    emit("formSubmit", formData.value)
    formData.value = { name: "", text: "" }
}



</script>