<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>


<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return{
            loadedPost: {
                author: 'Pisey',
                title: 'My Awesome Post',
                content: 'Super amazing, Thanks for that!',
                thumbnailLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png'

            }
        }
    }


}
</script>

<style scoped>
.update-form{
    width: 90%;
    margin: 20px auto;
}
@media (min-width: 768px){
    .update-form {
        width: 500px;
    }
}
</style>